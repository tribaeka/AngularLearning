package by.epam.training.angularjs.search;

import by.epam.training.angularjs.domain.Course;
import org.hibernate.search.jpa.FullTextEntityManager;
import org.hibernate.search.query.dsl.QueryBuilder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class CourseSearch {
    @PersistenceContext
    private EntityManager entityManager;
    public List<Course> search(String text) {

        FullTextEntityManager fullTextEntityManager =
                org.hibernate.search.jpa.Search.
                        getFullTextEntityManager(entityManager);

        QueryBuilder queryBuilder =
                fullTextEntityManager.getSearchFactory()
                        .buildQueryBuilder().forEntity(Course.class).get();

        org.apache.lucene.search.Query query =
                queryBuilder
                        .keyword()
                        .onFields("title", "description")
                        .matching(text)
                        .createQuery();

        org.hibernate.search.jpa.FullTextQuery jpaQuery =
                fullTextEntityManager.createFullTextQuery(query, Course.class);

        List<Course> results = jpaQuery.getResultList();

        return results;
    }

}
