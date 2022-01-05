import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Product } from './pages/Products'
import { Register } from './pages/Register'

function App() {
    return (
        <div>
            <Navbar />
            {/* <Home /> */}
            <Cart />
            {/* <Login /> */}
            {/* <Register /> */}
            {/* <Product /> */}
            <Footer />
        </div>
    )
}

export default App
