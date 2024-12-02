import java.util.Random;
import java.util.Scanner;

class Adivina {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        // Generar un número aleatorio entre 1 y 100
        int numeroAleatorio = random.nextInt(100) + 1;

        int intento = 0;
        boolean adivinado = false;

        System.out.println("Adivina el número entre 1 y 100:");

        // Bucle para pedir al usuario que adivine el número
        while (!adivinado) {
            System.out.print("Ingrese su intento: ");
            intento = scanner.nextInt();

            if (intento < numeroAleatorio) {
                System.out.println("El número es mayor.");
            } else if (intento > numeroAleatorio) {
                System.out.println("El número es menor.");
            } else {
                System.out.println("¡Felicidades! Has adivinado el número.");
                adivinado = true;
            }
        }

        // Cerrar el objeto Scanner
        scanner.close();
    }
}
