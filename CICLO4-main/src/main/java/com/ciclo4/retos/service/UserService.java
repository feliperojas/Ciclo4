/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ciclo4.retos.service;

import com.ciclo4.retos.model.User;
import com.ciclo4.retos.repository.UserRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Felipe Rojas
 */
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAll() {
        return userRepository.getAll();
    }

    public Optional<User> getUser(int id) {
        return userRepository.getUser(id);

    }

    public User registrar(User user) {
        if (user.getId() == null) {
            if (existeEmail(user.getEmail()) == false) {
                return userRepository.save(user);
            } else {
                return user;
            }
        } else {
            return user;
        }

    }

    public boolean existeEmail(String email) {
        return userRepository.existeEmail(email); /**Invocamos el médoto existeMail
                                                        para llamarlo y ejecutar 
                                                         el salvado validando la
                                               existencia del usurio por email*/

    }

    public User autenticarUsuario(String email, String password){
        Optional<User> usuario = userRepository.autenticarUsuario(email, password);
        
        if(usuario.isEmpty()){
            return new User(email, password, "NO DEFINIDO");
            
        }else{
            return usuario.get();
        }
    }
}
