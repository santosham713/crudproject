package com.example.simpleWebApp.controller;

import com.example.simpleWebApp.model.Product;
import com.example.simpleWebApp.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping("/products")
    @CrossOrigin(origins = "http://127.0.0.1:5500/")
    public List<Product> getProduct(){
        return service.getProduct();
    }

    @PostMapping("/products")
    @CrossOrigin(origins = "http://127.0.0.1:5500/")
    public void addProduct(@RequestBody Product prod){
        service.addProduct(prod);
    }

    @PutMapping("/products/{id}")
    @CrossOrigin(origins = "http://127.0.0.1:5500/")
    public ResponseEntity<String> updateProduct( @PathVariable int id, @RequestBody Product prod){
        Product product =service.updateProudct(id, prod);
        if (product != null) {
            return new ResponseEntity<>("Updated", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to update", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/products/{proId}")
    @CrossOrigin(origins = "http://127.0.0.1:5500/")
    public void deleteProduct(@PathVariable int proId){
        service.deleteProduct(proId);
    }
}
