import { Provider } from "react-redux"
import store from './Redux/Cakes/Store';
import "./App.css"
import CakeContainer from './Components/CakeContainer';
import HooksCakeContainer from "./Components/HooksCakeContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <h2 style={{textDecoration:"underline"}}>Cake app</h2>
          {/* <CakeContainer /> */}
        </div>
        <div className="container">
          <HooksCakeContainer/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
