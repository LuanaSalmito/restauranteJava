package org.example.controller;
import org.example.model.Prato;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class Controller {
    @GetMapping("/dishesList")
    ResponseEntity<List<Prato>> controller(){
        List<Prato> pratos = new ArrayList<>();

        Prato prato1 = new Prato("nome", "descricao", 150, 1, true, "Japonesa");

        pratos.add(prato1);

        return ResponseEntity.ok(pratos);

    }
}
