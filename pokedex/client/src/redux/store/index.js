import { createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "../reducer/index"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose; // esta linea es para conectar con la extension del navegador
// >>> REDUX DEVTOOLS

const store = createStore(
    reducer, 
    composeEnhancer(applyMiddleware(thunkMiddleware)) //esta linea es para hacer peticiones a un server
);

export default store;