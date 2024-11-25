function Producto(props) {
  const { products } = props;

  return (
    <>
      <h2>conponente producto</h2>
      {products.map((product, index) => (
        <div key={index}>
          <p>Nombre: {product.nombre}</p>
          <p>Precio: {product.precio}</p>
          <p>Description: {product.description}</p>
        </div>
      ))}
    </>
  );
}
export default Producto;
