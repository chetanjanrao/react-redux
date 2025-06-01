import { useSelector,useDispatch } from "react-redux"
import { buyCakes } from "../Redux/CakeIndex";
export default function HooksCakeContainer(){
      const numOfCakes = useSelector((state) =>state.numOfCakes);
      const dispatch = useDispatch();
      return (
            <div>
               <h2>Number of cakes :{numOfCakes} </h2>
               <button onClick={()=>{dispatch(buyCakes())}}>Buy Cake</button>
            </div>
      )
}