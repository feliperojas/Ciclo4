package com.as.repository.crud;

import com.as.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * MISION TIC 2022
 */
public interface ProductCrudRepository extends MongoRepository<Product, String> {
    
}
