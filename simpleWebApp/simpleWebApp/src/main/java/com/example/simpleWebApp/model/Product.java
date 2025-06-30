package com.example.simpleWebApp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int proId;
    private String proName;
    private int price;

    public Product(int proId, String proName, int price) {
        this.proId = proId;
        this.proName = proName;
        this.price = price;
    }

    public Product() {

    }

    public int getProId() {
        return proId;
    }

    public String getProName() {
        return proName;
    }

    public int getPrice() {
        return price;
    }

    public void setProId(int proId) {
        this.proId = proId;
    }

    public void setProName(String proName) {
        this.proName = proName;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
