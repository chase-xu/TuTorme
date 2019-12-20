import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './reducers/rootReducer';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore, createFirestoreInstance} from 'redux-firestore'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import { initializeApp } from 'firebase';
import firebase from 'firebase/app'
const store = createStore(rootReducer, 
    //passing to actions so that they know where to connect database
    // rootReducer,
    // initialiState,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, 
            getFirestore})),
        reduxFirestore(firebase, fbConfig),
        // reactReduxFirebase(fbConfig),
    ) 
);

const rrfProps = {
    firebase,
    config:fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
};

ReactDOM.render(
<Provider store ={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
    </ReactReduxFirebaseProvider>
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
