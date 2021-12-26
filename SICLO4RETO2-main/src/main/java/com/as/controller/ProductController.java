package com.as.controller;

import com.as.model.Product;
import com.as.service.ProductService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * MISION TIC 2022
 */
@RestController
@RequestMapping("/api/cleaningproduct")
public class ProductController {

    @Autowired
    private ProductService servicio;

    @GetMapping("/all")
    public List<Product> listAll() {
        return servicio.listAll();
    }

    @GetMapping("/{reference}")
    public Optional<Product> getAccesory(@PathVariable("reference") String reference) {
        return servicio.getAccesory(reference);
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Product create(@RequestBody Product accessory) {
        return servicio.create(accessory);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Product update(@RequestBody Product accessory) {
        return servicio.update(accessory);
    }

    @DeleteMapping("/{reference}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("reference") String reference) {
        return servicio.delete(reference);
    }
}
