
public class Persona {
	String nombre;
	int edad;

	public Persona(String nombre, int edad) {
		this.nombre = nombre;
		this.edad = edad;
	}
	public void mostrarDetalles() {
		System.out.println("Nombre: " + nombre);
		System.out.println("Edad: " + edad);
	}

	public static void main(String[] args) {
		Persona persona = new Persona("Juan", 25);
		persona.mostrarDetalles();
	}
}