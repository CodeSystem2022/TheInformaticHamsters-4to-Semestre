# Alumno: Giuliana Paola Diaz Luna
# 6.3 Uso del método format() ->
# utilizamos placeholder Parte 1 y 2
# dar formato a un string

nombre = 'Giuliana'
edad = 38
mensaje_con_formato = 'Mi nombre es %s y tengo %d años' % (nombre, edad)

# Creamos una tupla
persona = ('Carla', 'Gomez', 5000.00)
mensaje_con_formato = "Hola %s %s . Tu sueldo es %.2f" #% persona # Aqui le pasamos el objeto que es tupla"
#print(mensaje_con_formato % persona)

nombre = 'Juan'
edad = 19
sueldo = 3000
#mensaje_con_formato = 'Nombre {} Edad {} Sueldo {:.2f}'.format(nombre,edad,sueldo)
#print(mensaje_con_formato)

#mensaje = 'Nombre {0} Edad {1} Sueldo {2:.2f}'.format(nombre,edad,sueldo)
mensaje = 'Sueldo {2:.2f} Edad {1} Nombre {0}  '.format(nombre,edad,sueldo)
print(mensaje)



# Alumno: Miguel Rodriguez Saquilan 
#6.3 Uso del método format() -> utilizamos place holder
#Parte -> 3

diccionario = {'nombre': 'Kendall', 'edad': '35', 'Sueldo': 800.00}
mensaje = 'Nombre {dic[nombre]} Edad {dic[edad]} Sueldo {dic[Sueldo]:.2f}'.format(dic= diccionario)
print(mensaje)