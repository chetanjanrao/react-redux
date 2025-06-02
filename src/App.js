import { Provider } from "react-redux"
import store from '../src/Redux/Store/Store';
import "./App.css"
import CakeComponent from "./Components/CakeComponent";
import IcecremComponent from "./Components/IcecreamComponent";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
            <CakeComponent/> 
        </div>
        <div className="container">
            <IcecremComponent/> 
        </div>
      </div>
    </Provider>
  );
}

export default App;
