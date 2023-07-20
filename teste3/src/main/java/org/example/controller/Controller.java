package org.example.controller;
import org.example.model.Prato;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class Controller {
    @GetMapping("/dishesList")
    ResponseEntity<List<Prato>> controller(){
        List<Prato> pratos = new ArrayList<>();

        String jdbcUrl = "jdbc:postgresql://localhost:5432/banco";
        String username = "open_user";
        String password = "password";

        try (Connection connection = DriverManager.getConnection(jdbcUrl, username, password)) {
            String query = "SELECT id, nome, descricao, preco, disponibilidade, categoria FROM dishes";
            try (Statement statement = connection.createStatement();
                 ResultSet resultSet = statement.executeQuery(query)) {
                while (resultSet.next()) {
                    int id = resultSet.getInt("id");
                    String nome = resultSet.getString("nome");
                    String descricao = resultSet.getString("descricao");
                    int preco = resultSet.getInt(
                            "preco");
                    String categoria = resultSet.getString("categoria");
                    boolean disponibilidade = resultSet.getBoolean(
                            "disponibilidade");

                    Prato novoprato = new Prato(nome, descricao, preco, id, disponibilidade, categoria);
                    pratos.add(novoprato);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
            // Handle the exception
        }

        return ResponseEntity.ok(pratos);

    }
}
