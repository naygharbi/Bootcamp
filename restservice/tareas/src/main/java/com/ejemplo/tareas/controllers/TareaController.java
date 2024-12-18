package com.ejemplo.tareas.controllers;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/tareas")
public class TareaController {
    private List<String> tareas = new ArrayList<>();

    @GetMapping
    public List<String> getTareas() {
        return tareas;
    }

    @PostMapping
    public String addtarea(@RequestBody String tarea) {
        tareas.add(tarea);
        return "Ha añadido una \"" +tarea+"\"";

    }

    @DeleteMapping("/{index}")
    public String deletetarea(@PathVariable int index) {
        if(index>=0 && index<tareas.size()) {
            String tareaEliminada = tareas.remove(index);
            return "La tearea \""+tareaEliminada+"\" Ha eliminado";
        }
        return "index es incorrecto";
    }
}
