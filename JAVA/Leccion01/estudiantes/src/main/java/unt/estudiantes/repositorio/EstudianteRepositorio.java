// metodos para interactuar con la tabla estudiante de la bd Mysql
package unt.estudiantes.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import unt.estudiantes.modelo.Estudiante;

public interface EstudianteRepositorio extends JpaRepository<Estudiante,Integer> {
}
