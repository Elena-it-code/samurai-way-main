import './index.css';
import {store, StoreType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)

// state: { state: StateType; }
//_state={store._state} addPost={store.addPost} updateNewPostText={store.updateNewPostText}