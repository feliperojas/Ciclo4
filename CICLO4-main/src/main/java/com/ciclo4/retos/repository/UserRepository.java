/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ciclo4.retos.repository;

import com.ciclo4.retos.repository.crud.UserCrudRepository;
import com.ciclo4.retos.model.User;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Felipe Rojas
 */
@Repository
public class UserRepository {

    @Autowired
    private UserCrudRepository userCrudRepository;

    /**
     * este nombre se lo doy yo para establecer dependecia de UserCrudRepository
     */

    /**
     * Creamos el método para devolver a todos los usuarios/
     *
     */
    public List<User> getAll() {
        return (List<User>) userCrudRepository.findAll();
    }

    /**
     * OBtenemos por Id
     */
    public Optional<User> getUser(int id) {

        return userCrudRepository.findById(id);
    }

    /**
     * Metodo de salvado o actualizado
     */
    public User save(User user) {
        return userCrudRepository.save(user);
    }
    
    /**Invocamos la búsqueda por email*/
    public boolean existeEmail(String email) {
        Optional<User> usuario = userCrudRepository.findByEmail(email);
        
        return !usuario.isEmpty();/**retornamos true si no existe el usuario*/

    }
    /**LLamamos la autenticacion de email y password*/
    public Optional<User> autenticarUsuario(String email, String password){
    
        return userCrudRepository.findByEmailAndPassword(email, password);
    }
}
