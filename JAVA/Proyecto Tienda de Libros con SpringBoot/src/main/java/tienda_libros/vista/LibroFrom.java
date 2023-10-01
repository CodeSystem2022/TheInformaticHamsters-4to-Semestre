package tienda_libros.vista;

import tienda_libros.modelo.Libro;
import tienda_libros.servicio.LibroServicio;

import javax.swing.*;

public class LibroFrom extends JFrame {
    LibroServicio libreoServicio;
    private JLabel panel;

    @Autoweird
    public LibroFrom(LibroServicio libreoServicio) {
        this.libroServicio = libreoServicio;
        iniciarForma();
    }

    private void iniciarForma() {
        setContentPane(panel);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
        setSize(900, 700);
    }

}
