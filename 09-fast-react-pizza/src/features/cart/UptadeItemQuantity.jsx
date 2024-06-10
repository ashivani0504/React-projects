/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UptadeItemQuantity({pizzaId , currentQuantity}) {
    const dispatch =useDispatch();
    return (
        <div className=" flex gap-2 md:gap-3 ">
            <Button type="round" onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
           <span className="text-sm font-medium">{currentQuantity}</span>
           
            <Button type="round" onClick={()=>dispatch(increaseItemQuantity(pizzaId))} >+</Button>
        </div>
    )
}

export default UptadeItemQuantity