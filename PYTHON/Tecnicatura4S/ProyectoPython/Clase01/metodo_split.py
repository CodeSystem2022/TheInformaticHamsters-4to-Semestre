# Convertir cadena a lista por el metodo split ( significa separar o dividir)

help(str.split)
cursos = 'Java JavaScript Node Python Diseño '
lista_cursos= cursos.split() # aqui busca los espacios como separador, viene como default
print(f'Lista de cursos: {lista_cursos}')
print(type(lista_cursos))

cursos_separados_coma = 'Java,Python,Node,JavaScript,Spring'
lista_cursos =cursos_separados_coma.split(',') # aqui busca la coma como separador
# lista_cursos =cursos_separados_coma.split(',',2) aqui tbm busca solo la va a buscar dos veces la coma
print(f'Lista de cursos: {lista_cursos}') # si no le pasamos parametros, encontro un solo elemento porque no encontro espacio
print(len(lista_cursos))