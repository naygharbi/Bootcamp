import Tarjeta from "./tarjeta";

function ListaTarjeta() {
  return (
    <>
      <div className="grid">
        <Tarjeta
          nombre="Nayla"
          apellido="Garbi"
          ocupacion="Estudiante"
          imagenURL="https://imgcdn.stablediffusionweb.com/2024/4/7/b74024b4-3817-4453-99e7-f9ddbe3957e8.jpg"
        />
        <Tarjeta
          nombre="Nayla"
          apellido="Garbi"
          ocupacion="Estudiante"
          imagenURL="https://imgcdn.stablediffusionweb.com/2024/4/7/b74024b4-3817-4453-99e7-f9ddbe3957e8.jpg"
        />
        <Tarjeta
          nombre="Nayla"
          apellido="Garbi"
          ocupacion="Estudiante"
          imagenURL="https://imgcdn.stablediffusionweb.com/2024/4/7/b74024b4-3817-4453-99e7-f9ddbe3957e8.jpg"
        />
      </div>
    </>
  );
}

export default ListaTarjeta;
