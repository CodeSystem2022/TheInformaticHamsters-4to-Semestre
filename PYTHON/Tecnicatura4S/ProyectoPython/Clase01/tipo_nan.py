import math
from decimal import Decimal

#NaN (Not a Namber) dato numerico indefinido
a = float("NaN")
print(f'a: {a}')

#Modulo math
a = float("nan")
print(f'Es de tipo NaN(Not a Namber)?: {math.isnan(a)}')

#Modulo decimal
a = Decimal("NaN")
print(f'Es de tipo NaN(Not a Namber)?: {math.isnan(a)}')

