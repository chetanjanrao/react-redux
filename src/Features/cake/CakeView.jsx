import React from 'react';
import {useSelector} from "react-redux";
 import {useDispatch} from "react-redux"; // Uncomment if you need to dispatch actions
 import {ordered, restocked} from "./cakeSlice"; // Uncomment if you need to use these actions
export default function CakeView() {
      const numOfCakes = useSelector((state) => state.cake.numOfCakes);
      const dispatch = useDispatch(); // Uncomment if you need to dispatch actions
      return(
            <div className="container">
                  <h3>Number Of cakes :{numOfCakes} </h3>
                  <button className='btn' onClick={()=>{dispatch(ordered())}}>Order cake</button>
                  <button className='btn' onClick={()=>{dispatch(restocked(5))
                  }}>Restock cake</button>
            </div>
      )
}