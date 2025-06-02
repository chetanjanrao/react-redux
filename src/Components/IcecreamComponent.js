import { connect } from "react-redux"
import buyIcecream from "../Redux/Icecream/IcecreamActions"
function IcecremComponent(props){
      console.log(props)
      return(
            <> 
               <h3>Num Of Icecrem : {props.numOfIcecreams}</h3>
               <button onClick={props.buyIcecream}>Buy Icecrem</button>
            </>
      )
}
const mapStateToProps = (state)=>{
      return{
          numOfIcecreams : state?.icecream.numOfIcecreams
      }
}
const mapDispatchToProps = (dispatch)=>{
      return{
            buyIcecream : ()=>{dispatch(buyIcecream())}
      }
}
export default connect(mapStateToProps,mapDispatchToProps)(IcecremComponent)  //connect is a function from react