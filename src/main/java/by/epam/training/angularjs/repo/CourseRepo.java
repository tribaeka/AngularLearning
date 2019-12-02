package by.epam.training.angularjs.repo;

import by.epam.training.angularjs.domain.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Course, Long> {
}
