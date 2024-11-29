import java.util.Scanner;

public class Palindromo {
public static void main(String[] args) {
	Scanner scanner = new Scanner(System.in);

	System.out.println("Ingrese una cadena de texto: ");
    String texto = scanner.nextLine();

	String textoSinEsp = texto.replace(" ", "");
	System.out.println(textoSinEsp);

	String reversTexto = "";
	for(int i = textoSinEsp.length() -1 ; i >= 0; i--) {
		reversTexto = reversTexto + textoSinEsp.charAt(i);
	}
	if (textoSinEsp.equals(reversTexto)) {
		System.out.println("El texto es Palindromo");
	}
	else 
	System.out.println("El texto no es Palindromo");
}
}
