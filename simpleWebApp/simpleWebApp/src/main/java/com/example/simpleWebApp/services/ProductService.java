package com.example.simpleWebApp.services;

import com.example.simpleWebApp.model.Product;
import com.example.simpleWebApp.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductRepo repo;

    public ProductService(ProductRepo repo) {
        this.repo = repo;
    }

    //For listing the product in the web page
    public List<Product> getProduct(){
        return repo.findAll();
    }

    //for adding the product in database
    public void addProduct(Product prod){
        repo.save(prod);
    }

    //for updating the product
    public Product updateProudct(int id, Product prod){

        Optional<Product> product = repo.findById(id);
        if(product.isPresent()){
            Product pro = product.get();
            pro.setProName(prod.getProName());
            pro.setProBrand(prod.getProBrand());
            pro.setPrice(prod.getPrice());
            return repo.save(pro);
        }else {
            throw new RuntimeException("Product not found");
        }
    }

    //for deleting the product
    public void deleteProduct(int proId){
        repo.deleteById(proId);
    }
}
