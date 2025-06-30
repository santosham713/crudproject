package com.example.simpleWebApp.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @RequestMapping("/")
    public String homePage(){
        return "Welcome to our home page ";
    }

    @RequestMapping("/about")
    public String aboutPage(){
        return  "this is about page";
    }
}
