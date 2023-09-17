# Parte 1 -> Trabajamos con el constructor bool() - Alumno: Giuliana Paola Diaz Luna
# Bool contiene los valores de True y False
# Los tipos numeros, es false para el 0 ( el cero), true para los demas valores
valor = 0
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

valor = 1
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

# Parte 2 -> Utilizamos el tipo str (String) - Alumno: Giuliana Paola Diaz Luna
# Tipo String -> False '', True para demas valores

valor = ''
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

valor = 'Hola'
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

# Parte 3 -> Trabajamos con las Colecciones - Alumno: Giuliana Paola Diaz Luna
# Tipo de colecciones -> False para colecciones vacias
# Tipo de colecciones -> True para todas las demás.
valor = []
resultado = bool(valor)
print(f'valor de una lista vacia: {valor}, Resultado: {resultado}')

valor = [2,3,4]
resultado = bool(valor)
print(f'valor de una lista con elementos: {valor}, Resultado: {resultado}')

# Tupla
valor = ()
resultado = bool(valor)
print(f'valor de una tupla vacia: {valor}, Resultado: {resultado}')

valor = (5,)
resultado = bool(valor)
print(f'valor de una tupla con elementos: {valor}, Resultado: {resultado}')

# Diccionario
valor = {}
resultado = bool(valor)
print(f'valor de un diccionario vacio: {valor}, Resultado: {resultado}')

valor = {'Nombre': 'Juan', 'Apellido': 'Perez'}
resultado = bool(valor)
print(f'valor de un diccionario con elementos: {valor}, Resultado: {resultado}')


# Parte 4 - Sentencias de control con bool - Alumno: Nadia Acosta
if valor:
    print('Regresa verdadero')
else:
    print('Regresa falso')


# Parte 5 - ciclos - Alumno: Nadia Acosta
variable = 17
while variable:
    print('Regresa falso')
    break
else:
    print('Regresa falso')