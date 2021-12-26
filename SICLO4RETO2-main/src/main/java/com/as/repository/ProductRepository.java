package com.as.repository;

import com.as.model.Product;
import com.as.repository.crud.ProductCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * MISION TIC 2022
 */
@Repository
public class ProductRepository {

    @Autowired
    private ProductCrudRepository crudInterface;

    public List<Product> listAll() {
        return crudInterface.findAll();
    }

    public Optional<Product> getAccesory(String reference) {
        return crudInterface.findById(reference);
    }

    public Product create(Product accesory) {
        return crudInterface.save(accesory);
    }

    public void update(Product accesory) {
        crudInterface.save(accesory);
    }

    public void delete(Product accesory) {
        crudInterface.delete(accesory);
    }
}
