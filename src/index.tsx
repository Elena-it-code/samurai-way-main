import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";



let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App store={store.getState()} dispatch={store.dispatch}/>
            </Provider>
            {/*<App dispatch={store.dispatch.bind(store)}/>*/}
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)



//в 42 уроке Димыч именно так прописывает rerenderEntireTree(), чтобы подписаться на изменения store
/*rerenderEntireTree()
store.subscribe(()=> {
    let state = store.getState();
    rerenderEntireTree()
})*/
