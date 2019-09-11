import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
    return (
        <Fragment>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
            </Switch>
        </Fragment>
    );
}
export default App;