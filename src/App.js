import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Product } from './pages/Products'
import { Register } from './pages/Register'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Navigate,
} from 'react-router-dom'

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/cart' element={<Cart />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/register' element={<Register />} />
                    <Route exact path='/product' element={<Product />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App
