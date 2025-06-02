import { buyCake } from "../Redux/Cake/CakeActions"
import { connect } from "react-redux"
 function CakeComponent(props){
      console.log(props)
      return (
            <>
              <h3>No of cakes in shelf :{props?.numOfCakes} </h3>
              <button onClick={props.buyCake}>Buy Cake</button>
            </>
      )
}
const mapStateToProps = (state)=>{
      return{
            numOfCakes : state.cake.numOfCakes
      }
}
const mapDispatchToProps = (dispatch)=>{
      return{
            buyCake : () =>{dispatch(buyCake())}
      }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeComponent)