const Meals = (props) => {
  const { products, onAdd } = props;
  return (
    <div>
      <h2>Meals</h2>
      <div>
        {products.map((product) => (
          <MealItem
            key={product.id}
            product={product}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Meals;
