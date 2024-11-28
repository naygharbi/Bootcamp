import java.util.Scanner;

public class OperacionesAritmeticas {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Put your first number");
		double num1 = scanner.nextDouble();

		System.out.println("Put your second number");
		double num2 = scanner.nextDouble(); 

		// realizar operaciones aritmética
		double suma = num1 + num2;
		double resta = num1 - num2;
		double multiplicacion = num1 * num2;
		double division = num1 / num2;
		// mostrar el resultado
		System.out.println("Suma:" + suma);
		System.out.println("Resta:" + resta);
		System.out.println("Multiplication:" + multiplicacion);
		System.out.println("Division:" + division);
	}
}