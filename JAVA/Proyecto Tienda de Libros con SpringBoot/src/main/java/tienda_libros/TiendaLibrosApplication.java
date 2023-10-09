package tienda_libros;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.tienda_libros.vista.LibroFrom;
import java.awt.EventQueue;

@SpringBootApplication
public class TiendaLibrosApplication {

	public static void main(String[] args) {
	
		ConfigurableApplicationContext contextoSpring =
					new SpringApplicationBuilder(TiendaLibrosApplication.class)
							.headless(false)
							.web(WebApplicationType.NONE)
							.run(args);

			//Ejecutamos el codigo para cargar el formulario
			EventQueue.invokeLater(() -> { //Metodo Lambda
				//Obtenemos el objeto form a traves del Spring
			LibroFrom libroFrom = contextoSpring.getBean(LibroFrom.class);
			});
	}
}
