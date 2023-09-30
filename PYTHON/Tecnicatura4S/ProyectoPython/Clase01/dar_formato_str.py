













# Alumno: Miguel Rodriguez Saquilan 
#6.3 Uso del método format() -> utilizamos place holder
#Parte -> 3

diccionario = {'nombre': 'Kendall', 'edad': '35', 'Sueldo': 800.00}
mensaje = 'Nombre {dic[nombre]} Edad {dic[edad]} Sueldo {dic[Sueldo]:.2f}'.format(dic= diccionario)
print(mensaje)