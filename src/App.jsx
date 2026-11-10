import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import SignUp from './components/signInsignUp/SignUp'
import SignIn from './components/signInsignUp/SignIn'
import Home from './pages/Home'
import About from './pages/About'

function App () {
    const [cart, setCart] = useState([])

    function addToCart(product) {
        setCart(prev => [...prev, product])
    }
    return(
        <Routes>
            <Route
                path='/about'
                element={<About cartLength={cart.length}/>}
            />
            <Route
                path='/'
                element={<Home cartLength={cart.length} addToCart={addToCart}/>}
            />
            <Route
                path='/signup'
                element={<SignUp cartLength={cart.length}/>}
            />
            <Route
                path='/signin'
                element={<SignIn cartLength={cart.length}/>}
            />
        </Routes>
    )
}

export default App