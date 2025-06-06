import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import  {ordered, restocked } from "./icecreamSlice"
export default function IcecreamView() {
      const [value,setValue] = React.useState(1); // State to hold the input value
      const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
      const dispatch = useDispatch();
      return(
            <div className='container'>
                  <h3>Number Of Icecreams : {numOfIcecreams}</h3>
                  <input type="number" value={value} onChange={(e)=>{setValue(parseInt(e.target.value))}}/>
                  <button className='btn' onClick={()=>{dispatch(ordered())}}> Order Icecream</button>
                  <button className='btn' onClick={()=>{dispatch(restocked(value))}}>Restock Icecream</button>
            </div>
      )
}