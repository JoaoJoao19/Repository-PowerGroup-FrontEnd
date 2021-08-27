#ciclo for
numero=int (input("¿hasta que numero quieres sumar?"))
suma=0 #este es un acumulador
cuenta=0 #este es un contador
for i in range(numero+1):
    print(i)
    suma +=i
    cuenta=cuenta+1
print("la suma de los numeros es:",suma)
print("el ciclo se ejcuto",cuenta, "veces")

#quiero que empiece desde 1 y no de 0
suma2=0 #este es un acumulador
cuenta2=0 #este es un contador
#pero quiero que mi programa empiece desde 1 y no desde 0
for i in range(1,numero+1):
    suma2 +=i
    cuenta2=cuenta2+1
print("la suma de los numeros es:",suma2)
print("el ciclo se ejcuto",cuenta2, "veces")

#quiero que imprima los pares
suma3=0 #este es un acumulador
cuenta3=0 #este es un contador
#pero quiero que mi programa empiece desde 1 y no desde 0
for i in range(2,numero+1,2):
    suma3 +=i
    cuenta3=cuenta3+1
print("la suma de los numeros pares es:",suma3)
print("el ciclo se ejcuto",cuenta3, "veces")

#quiero que imprima los impares
suma4=0 #este es un acumulador
cuenta4=0 #este es un contador
#pero quiero que mi programa empiece desde 1 y no desde 0
for i in range(1,numero+1,2):
    suma4 +=i
    cuenta4=cuenta4+1
print("la suma de los numeros impares es:",suma4)
print("el ciclo se ejcuto",cuenta4, "veces")


###Soy Juan Felipe y estoy modificando su codigo
###creo que ya logre instalar un gi o git hub 
###me ahorre el reinstalar todo el windows lol 10:01am




