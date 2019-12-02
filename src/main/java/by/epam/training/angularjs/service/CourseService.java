package by.epam.training.angularjs.service;

import by.epam.training.angularjs.domain.Course;
import by.epam.training.angularjs.repo.CourseRepo;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    private final CourseRepo courseRepo;

    public CourseService(CourseRepo courseRepo) {
        this.courseRepo = courseRepo;
    }

    public List<Course> getPageableCourses(int start, int count){
        Pageable pageable = PageRequest.of(start, count, Sort.by(Sort.Direction.DESC, "creationDate"));

        return this.courseRepo.findAll(pageable).getContent();
    }
}
