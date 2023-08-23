
#Clase 1: Clases Parte 1
#Laboratorio IV: PYTHON
#Team: The Informatic Hamsters
#Scrum Master: Quispe Marcelo Alejandro





# 1.1 Comenzamos con el laboratorio de usuario: como tarea se debe crear el UML - Alumno:  


# 1.2 Comenzamos a cargar la base de datos -> continuamos con postgresql - Alumno: Miguel Rodriguez Saquilan 


# 1.3 Vamos a avanzar con la clase entidad Usuario  - Alumno : Nadia Acosta

class Usuario:
    def __init__(self, id_usuario=None, username=None, password=None):
        self._id_usuario = id_usuario
        self._username = username
        self._password = password

    def __str__(self):
        return f'Usuario: {self._id_usuario} {self._username} {self._password}'

    #Metodos Get y Set
    @property
    def id_usuario(self):
        return self._id_usuario

    @id_usuario.setter
    def id_usuario(self, id_usuario):
        self._id_usuario = id_usuario

    @property 
    def username(self):
        return self._username

    @username.setter 
    def username(self, username):
    self._username = username

    @property
    def password(self):
        return self._password
    
    @password.setter 
    def password(self, password):
        self._password = password
   
# 1.4 Comenzamos con la Clase de UsuarioDAO - Alumno: Juan Pablo Nolan

from capa_datos_persona.Usuarios import Usuario
from capa_datos_persona.cursor_del_pool import CursorDelPool
from logger_base import log

class UsuarioDAO:
    """
    DAO -> Data Access Object para la tabla usuario
    CRUD -> Create - Read - Update - Delete
    """
    _SELECT = "SELECT * FROM usuario ORDER BY id_usuario"
    _INSERTAR = "INSERT INTO usuario(username, password) VALUES (%s, %s)"
    _ACTUALIZAR = "UPDATE usuario SET username=%s, password=%s WHERE id_usuario=%s"
    _ELIMINAR = "DELETE FROM usuario WHERE id_usuario=%s"

    @classmethod
    def seleccionar(cls):
        with CursorDelPool() as cursor:
            log.debug("Seleccionando usuarios")
            cursor.execute(cls._SELECT)
            registros = cursor.fetchall()
            usuarios = []
            for registro in registros:
                usuario = Usuario(registro[0], registro[1], registro[2])  # Cada registro es para cada ccolumna
                usuarios.append(usuario)
            return usuarios

    @classmethod
    def insertar(cls, usuario):
        with CursorDelPool() as cursor:
            log.debug(f'Usuario a insertar: {usuario}')
            valores = (usuario.username, usuario.password)
            cursor.execute(cls._INSERTAR, valores)
            return cursor.rowcount

    @classmethod
    def actualizar(cls, usuario):
        with CursorDelPool() as cursor:
            log.debug(f'Usuario a actualizar: {usuario}')
            valores = (usuario.username, usuario.password, usuario.id_usuario)
            cursor.execute(cls._ACTUALIZAR, valores)
            return cursor.rowcount

    @classmethod
    def eliminar(cls, usuario):
        with CursorDelPool() as cursor:
            log.debug(f'Usuario a eliminar: {usuario}')
            valores = (usuario.id_usuario)
            cursor.execute(cls._ELIMINAR, valores)
            return cursor.rowcount

if __name__ == '__main__':
     
   #Eliminar un registro
    usuario1 = Usuario(id_usuario="1")
    usuarios_eliminados = UsuarioDAO.eliminar(usuario1)
    log.debug(f'Usuarios eliminados: {usuarios_eliminados}')
    
    #Actualizar un registro
    usuario1 = Usuario(2, "agomez", 654)
    usuarios_actualizados = UsuarioDAO.actualizar(usuario1)
    log.debug(f'Registro actualizado: {usuarios_actualizados}')
    
    #Insertar un registro
    usuario1 = Usuario(username="msalas", password=987)
    usuarios_insertados = UsuarioDAO.insertar(usuario1)
    log.debug(f'Usuarios insertados: {usuarios_insertados}')
    
    #Seleccionar objetos
    usuarios = UsuarioDAO.seleccionar()
    for usuario in usuarios:
        log.debug(usuario)

    
    
# 1.5 Comenzamos las pruebas de la Clase UsuarioDAO y menu_app_usuario - Alumno:
    


# 1.6 Comenzamos a generar las diferentes opciones en menu_app_usuario - Alumno:



# 1.7 Prueba final - Alumno :
