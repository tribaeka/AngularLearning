package by.epam.training.angularjs.controller;

import by.epam.training.angularjs.domain.Course;
import by.epam.training.angularjs.repo.CourseRepo;
import by.epam.training.angularjs.search.CourseSearch;
import by.epam.training.angularjs.service.CourseService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("course")
public class CourseController {
    private ObjectMapper mapper = new ObjectMapper();
    private final CourseRepo courseRepo;
    private final CourseService courseService;
    private final CourseSearch courseSearch;
    @Autowired
    public CourseController(CourseRepo courseRepo, CourseService courseService, CourseSearch courseSearch) {
        this.courseRepo = courseRepo;
        this.courseService = courseService;
        this.courseSearch = courseSearch;
    }

    @GetMapping
    public List<Course> list(){
        return courseRepo.findAll();
    }

    @GetMapping(params = {"start", "count"})
    public List<Course> list(@RequestParam(name = "start") int start, @RequestParam(name = "count") int count){
        return courseService.getPageableCourses(start, count);
    }

    @GetMapping(params = "query")
    public List<Course> executeSearch(@RequestParam(name = "query") String query){
        if (query.isEmpty()) {
            return  courseRepo.findAll();
        }
        List<Course> searchResults = null;
        try {
            searchResults = courseSearch.search(query);
        }
        catch (Exception ex) {
            ex.printStackTrace();
        }
        return searchResults;
    }

    @GetMapping("{id}")
    public Course getOne(@PathVariable("id") Course course){
        return course;
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public Course create(@RequestBody Course  course){
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
