

# 5.3 String inmutables Alumno : Miguel Rodriguez Saquilan


# help(str.capitalize)
mensaje1 = "hola Mundo"
mensaje2 = mensaje1.capitalize()

print(f'mensaje1: {mensaje1}, id: {id(mensaje1)}')
print(f'mensaje 2; {mensaje2}, id: {id(mensaje2)}')

mensaje1 += ' Adios'
print(f'mensaje1: {mensaje1}, id: {id(mensaje1)}')


