#Profundizando en el tipo float

a = 3.0
print(f'a: {a:.2f}')

#Constructor tipo float -> puede recibir int y str
a = float(10) #Le pasamos un tipo entero (int)
a =float("10")
print(f'a: {a:.2f}')

#Notacion exponencial (para valores negativos y positivos)
a = 3e5
print(f'a: {a:.2f}')