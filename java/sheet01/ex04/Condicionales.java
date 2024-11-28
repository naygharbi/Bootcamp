import java.util.Scanner;

class Condicionales {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.println("Enter the integer number");
		int num = scanner.nextInt();

		if (num > 0){
			System.out.println("El numero es positivo");
		}
		else if (num < 0) {
			System.out.println("El numero es negativo");
		}
		else {
			System.out.println("Es egual a cero");
		}
	}
}