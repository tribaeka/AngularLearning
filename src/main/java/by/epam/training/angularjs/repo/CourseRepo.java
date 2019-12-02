package by.epam.training.angularjs.repo;

import by.epam.training.angularjs.domain.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Course, Long> {
    Page<Course> findAll(Pageable pageable);
}
