import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UptadeItemQuantity from "../cart/UptadeItemQuantity";

function MenuItem({ pizza }) {
  const dispatch=useDispatch();
  const { id,name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity=useSelector(getCurrentQuantityById(id));
  const isInCart=currentQuantity>0;
  


  function handleAddToCart(){
    const newItem= {
      pizzaId:id,
      name,
      quantity:1,
      unitPrice,
      totalPrice:unitPrice*1,
  };
  dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2" >
      <img src={imageUrl} alt={name}  className={`h-24 ${soldOut? 'opacity-70 grayscale': ''}`}/>
      <div className="flex flex-col grow p-0.4">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(", ")}</p>

        <div className="mt-auto flex items-center justify-between">
         
          {!soldOut ? <p className="text-sm ">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500"> Sold out</p>}

{ isInCart && <div className=" flex items-center gap-3 sm:gap-8"> 
  <UptadeItemQuantity  pizzaId={id} currentQuantity={currentQuantity}/>
  <DeleteItem pizzaId={id} />
  </div>}

   { !soldOut && !isInCart && (
   <Button onClick={handleAddToCart}
    type="small" >
      Add to cart
      </Button>
    )}
        </div>
      </div>
    </li>
  );
}

//added
MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    soldOut: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuItem;
