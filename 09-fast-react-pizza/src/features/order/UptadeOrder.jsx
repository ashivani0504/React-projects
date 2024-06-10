/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useFetcher } from "react-router-dom"
import Button from "../../ui/Button"
import { updateOrder } from "../../services/apiRestaurant";

function UptadeOrder({order}) {
    const fetcher =useFetcher();
    console.log(order)
    return (
        <fetcher.Form   className="text-right" method ="PATCH">
            <Button type="primary" > Make priority</Button></fetcher.Form>
        
    )
}

export default UptadeOrder

 export async function action({request , params}){
    const data ={priority :true};
    await updateOrder(params.orderId , data);
   
    return null;
}
