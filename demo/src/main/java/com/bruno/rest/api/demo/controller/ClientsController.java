package com.bruno.rest.api.demo.controller;

import com.bruno.rest.api.demo.client.Client;
import com.bruno.rest.api.demo.clientrepository.ClientRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/clients")
public class ClientsController {

    private final ClientRepository clientRepository;

    public ClientsController(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @GetMapping
    @CrossOrigin( origins = "http://localhost:3000") // Liberação de CORS para API
    public List<Client> getClients() {
        System.out.println("Bateu uma onda forte, to vendo macado, em cima do poste.");
        return clientRepository.findAll();
    }

    @GetMapping("/{id}")
    @CrossOrigin( origins = "http://localhost:3000") // Liberação de CORS para API
    public Client getClient(@PathVariable Long id) {

        return clientRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    //definir o tipo de midia suportado pela requisição
    @PostMapping
    @CrossOrigin( origins = "http://localhost:3000") // Liberação de CORS para API
    public ResponseEntity createClient(@RequestBody Client client) throws URISyntaxException {
        Client savedClient = clientRepository.save(client);
        return ResponseEntity.created(new URI("/clients/" + savedClient.getId())).body(savedClient);
    }

    @PutMapping("/{id}")
    @CrossOrigin( origins = "http://localhost:3000") // Liberação de CORS para API
    public ResponseEntity updateClient(@PathVariable Long id, @RequestBody Client client) {
        Client currentClient = clientRepository.findById(id).orElseThrow(RuntimeException::new);
        currentClient.setName(client.getName());
        currentClient.setEmail(client.getEmail());
        currentClient = clientRepository.save(client);
        clientRepository.deleteById(currentClient.getId()); //Jeitinho brasileiro a partir daqui, cuidado
        return ResponseEntity.ok(clientRepository.findById(id));
    }

    @DeleteMapping("/{id}")
    @CrossOrigin( origins = "http://localhost:3000") // Liberação de CORS para API
    public ResponseEntity deleteClient(@PathVariable Long id) {
        clientRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
