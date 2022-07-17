import MealItem from "./MealItem";

const Meals = (props) => {
  const { products, onAdd } = props;
  return (
    <div>
      <h2>Meals</h2>
      <div>
        {products.map((product) => (
          <div>
            <MealItem>
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
            </MealItem>
            <div>
              <button onClick={() => onAdd(product)}></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
