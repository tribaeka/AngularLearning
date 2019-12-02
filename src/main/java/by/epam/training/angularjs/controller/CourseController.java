package by.epam.training.angularjs.controller;

import by.epam.training.angularjs.domain.Course;
import by.epam.training.angularjs.repo.CourseRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("course")
public class CourseController {
    private ObjectMapper mapper = new ObjectMapper();
    private final CourseRepo courseRepo;
    @Autowired
    public CourseController(CourseRepo courseRepo) {
        this.courseRepo = courseRepo;
    }

    @GetMapping
    public List<Course> list(){
        return courseRepo.findAll();
    }

    @PostMapping
    public Course create(@RequestBody String jsonCourse){
        Course course = null;
        try {
            course = mapper.readValue(jsonCourse, Course.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return courseRepo.save(course);
    }

    @PutMapping("{id}")
    public Course update(@PathVariable("id") Course courseFromDb,
                       @RequestBody String jsonCourse
    ){
        Course course = null;
        try {
            course = mapper.readValue(jsonCourse, Course.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        BeanUtils.copyProperties(course, courseFromDb, "id");

        return courseRepo.save(courseFromDb);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Course course){
        courseRepo.delete(course);
    }
}
