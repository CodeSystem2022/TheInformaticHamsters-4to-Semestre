package tienda_libros.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import tienda_libros.modelo.Libro;

public interface LibroRepositorio extends JpaRepository<Libro, Integer> {

}
