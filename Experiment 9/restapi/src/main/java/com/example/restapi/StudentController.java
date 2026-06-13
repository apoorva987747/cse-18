package com.example.restapi;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/students")
public class StudentController {

    @GetMapping
    public String getStudents() {
        return "List of Students";
    }

    @PostMapping
    public String addStudent() {
        return "Student Added Successfully";
    }

    @PutMapping("/{id}")
    public String updateStudent(@PathVariable int id) {
        return "Student " + id + " Updated Successfully";
    }

    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable int id) {
        return "Student " + id + " Deleted Successfully";
    }
}