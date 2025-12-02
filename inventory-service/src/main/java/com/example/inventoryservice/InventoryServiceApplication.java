package com.example.inventoryservice;

import com.example.inventoryservice.entities.Product;
import com.example.inventoryservice.repositories.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.UUID;

@SpringBootApplication
public class InventoryServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(InventoryServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner start(ProductRepository productRepository) {
        return args -> {
            productRepository.save(new Product(UUID.randomUUID().toString(), "Computer", 3200, 11));
            productRepository.save(new Product(UUID.randomUUID().toString(), "Printer", 1200, 10));
            productRepository.save(new Product(UUID.randomUUID().toString(), "Smartphone", 2100, 13));
            productRepository.findAll().forEach(p -> {
                System.out.println(p.toString());
            });
        };
    }
}
