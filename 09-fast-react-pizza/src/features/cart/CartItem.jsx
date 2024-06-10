/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UptadeItemQuantity from "./UptadeItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity=useSelector(getCurrentQuantityById(pizzaId));
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-small font-bold">{formatCurrency(totalPrice)}</p>
       
       <UptadeItemQuantity  pizzaId={pizzaId} currentQuantity={currentQuantity}/>
        <DeleteItem  pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
