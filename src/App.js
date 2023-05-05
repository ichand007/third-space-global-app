import logo from './logo.svg';
import './App.css';
import ShoppingStoreDataGrid from './PresentationLayer/ShoppingStoreDataGrid';
import { Provider } from "react-redux";
import store from "./StateManagement/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <ShoppingStoreDataGrid />
      </Provider>
     
    </div>
  );
}

export default App;
