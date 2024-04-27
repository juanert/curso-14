import os

#Manejo de archivos
archivo = open("archivo.txt", "w")
archivo.write("Hola Mundo")
archivo.close()

archivo = open("archivo.txt", "r")
contenido = archivo.read()
archivo.close()

archivo = open("archivo.txt", "a")
archivo.write("\nAdios Mundo")
archivo.close()

#Get each line
archivo = open("archivo.txt", "r")
contenido = archivo.readline()
archivo.close()

if os.path.exists("archivo.txt"):
  os.remove("archivo.txt")
else:
  print("El archivo no existe")

print(contenido)