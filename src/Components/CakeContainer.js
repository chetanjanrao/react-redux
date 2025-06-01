import React from "react";
import { connect } from "react-redux";
import { buyCakes } from "../Redux/CakeIndex"

//import { buyCakes } from "../Redux/Cakes/CakesActions";
 function CakeContainer(props) {
    return(
      <>
         <h2>Number Of Cakes in Shelf : {props.numOfCakes}</h2>
         <button onClick={props.buyCakes}>Buy Cake</button>
      </>
    )
}

const mapStateToProps = state =>{
  return {
    numOfCakes: state.numOfCakes
  }
}
const mapDispatchToProps = dispatch =>{
  console.log(dispatch)
   return {
    buyCakes: ()=>dispatch(buyCakes())}
   }



export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);