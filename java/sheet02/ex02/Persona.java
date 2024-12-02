public class Persona {
    private String nombre;
    private int edad;

    // Constructor to initialize attributes
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Getter for nombre
    public String getNombre() {
        return nombre;
    }

    // Setter for nombre
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    // Getter for edad
    public int getEdad() {
        return edad;
    }

    // Setter for edad
    public void setEdad(int edad) {
        this.edad = edad;
    }

    // Method to display details
    public void mostrarDetalles() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
    }

    public static void main(String[] args) {
        // Create an object of Persona with name Juan and age 25
        Persona persona = new Persona("Juan", 25);
        // Display the initial details of the persona
        persona.mostrarDetalles();

        // Modify the attributes using setter methods
        persona.setNombre("Carlos");
        persona.setEdad(30);

        // Display the updated details of the persona
        System.out.println("Detalles actualizados:");
        System.out.println("Nombre: " + persona.getNombre());
        System.out.println("Edad: " + persona.getEdad());
    }
}