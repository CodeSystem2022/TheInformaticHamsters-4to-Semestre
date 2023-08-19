
#Clase 1: Clases Parte 1
#Laboratorio IV: PYTHON
#Team: The Informatic Hamsters
#Scrum Master: Quispe Marcelo Alejandro





# 1.1 Comenzamos con el laboratorio de usuario: como tarea se debe crear el UML - Alumno:  


# 1.2 Comenzamos a cargar la base de datos -> continuamos con postgresql - Alumno: 


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
   
# 1.4 Comenzamos con la Clase de UsuarioDAO - Alumno: 
    
    
# 1.5 Comenzamos las pruebas de la Clase UsuarioDAO y menu_app_usuario - Alumno:
    


# 1.6 Comenzamos a generar las diferentes opciones en menu_app_usuario - Alumno:



# 1.7 Prueba final - Alumno :
