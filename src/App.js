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
    Navigate,
    // Navigate,
} from 'react-router-dom'
import { Category } from './pages/Category'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { userLoginReducer } from './redux/reducers/userReducer'

function App() {
    const [login, setLogin] = useState(false)
    // const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { isLogin } = userLogin

    useEffect(() => {
        if (userLogin.userInfo) {
            setLogin(true)
            console.log('Login: ', login)
        } else {
            setLogin(false)
        }
        // const loading = () => {
        //     setLogin(isLogin)
        // }
        return () => {
            // loading()
        }
    }, [isLogin])

    return (
        <div>
            <Router>
                <Navbar login={login} />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route
                        exact
                        path='/cart'
                        element={<Cart login={login} />}
                    />
                    <Route
                        exact
                        path='/login'
                        element={login ? <Navigate to='/' /> : <Login />}
                    />
                    <Route
                        exact
                        path='/register'
                        element={login ? <Navigate to='/' /> : <Register />}
                    />
                    <Route exact path='/product/:id' element={<Product />} />
                    <Route exact path='/category/:cat' element={<Category />} />
                    <Route
                        exact
                        path='/*'
                        element={
                            <h1 className='h-96 flex items-center justify-center'>
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
