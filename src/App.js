import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Cart } from "./pages/Cart"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Product } from "./pages/Products"
import { Register } from "./pages/Register"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Navigate,
} from "react-router-dom"
import { Category } from "./pages/Category"

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/product/:id" element={<Product />} />
                    <Route exact path="/category/:cat" element={<Category />} />
                    <Route
                        exact
                        path="/*"
                        element={
                            <h1 className="h-96 flex items-center justify-center">
                                404 ERROR
                            </h1>
                        }
                    />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App
