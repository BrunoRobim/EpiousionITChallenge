package com.bruno.rest.api.demo.client;

import org.springframework.data.domain.Persistable;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "client")
public class Client {
    public Client(){}
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String email;


    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public Client(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public Long getId(){return this.id;}


    // getter, setters, contructors
}


