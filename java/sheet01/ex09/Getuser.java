import java.util.Scanner;

public class Getuser {
	public static void main(String[] args) {
	// Crear un objeto Scanner para leer la entrada del usuario
        Scanner scanner = new Scanner(System.in);

        // Solicitar al usuario que ingrese su nombre
        System.out.print("Ingrese su nombre: ");
        String nombre = scanner.nextLine();

        // Saludar al usuario con un mensaje personalizado
        System.out.println("Hola, " + nombre + "! Bienvenido.");

        // Cerrar el objeto Scanner
        scanner.close();
    }
}
