try:
  numero = int(input("Introduce un numero: "))
  print(f"El numero es {numero}")
except ValueError:
  print("Debes introducir un numero")
except Exception as e:
  print("Ha ocurrido un error", type(e).__name__)

#Manejo de archivos
archivo = open("archivo.txt", "w")
archivo.write("Hola Mundo")
archivo.close()