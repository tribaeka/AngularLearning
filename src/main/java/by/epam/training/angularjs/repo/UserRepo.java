package by.epam.training.angularjs.repo;

import by.epam.training.angularjs.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
}

