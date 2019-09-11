import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component';

const HatsPage = () => ( < div > < h1 > Hats Page < /h1> < /div > )

const JacketPage = () => ( < div > < h1 > JacketPage < /h1> < /div > )

const SneakerPage = () => ( < div > < h1 > SneakerPage < /h1> < /div > )

const WomensPage = () => ( < div > < h1 > Womens Page < /h1> < /div > )

const MensPage = () => ( < div > < h1 > Mens Page < /h1> < /div > )

function App() {
    return ( < Fragment > < Switch > < Route exact path = '/'
        component = {
            HomePage
        }
        /> < Route exact path = '/hats
        ' component = {
        HatsPage
    }
    /> < Route path = '/jackets
    ' component = {
    JacketPage
}
/> < Route path = '/sneakers
' component = {
SneakerPage
}
/> < Route path = '/womens
' component = {
WomensPage
}
/> < Route path = '/mens
' component = {
MensPage
}
/> < /
Switch > < /Fragment >);
}
export default App;