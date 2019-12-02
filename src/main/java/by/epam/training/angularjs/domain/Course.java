package by.epam.training.angularjs.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Indexed;

import javax.persistence.*;

@Indexed
@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Long id;
    @Field
    private String title;
    @Field
    private String description;
    private String creationDate;
    private int duration;
    private boolean isTopRated;

    @Override
    public String toString() {
        return "Course{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", creationDate='" + creationDate + '\'' +
                ", duration=" + duration +
                ", isTopRated='" + isTopRated + '\'' +
                '}';
    }
}
