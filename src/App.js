import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
// import Home from './Pages/Home/Home'
import Header from '../src/Components/Header/Header'
// import Login from './Pages/Login/Login'
// import Register from './Pages/Register/Register'
import React, { useEffect, lazy,Suspense } from 'react'
import { auth } from './utils/firebase'
import { setuser } from './Redux/Action'
import { useDispatch } from 'react-redux'
// import SingleProduct from './Pages/SingleProduct/SingleProduct'
// import Checkout from './Pages/Checkout/Checkout'
// import Payment from './Pages/Payment/Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(
  'pk_test_51J5DrlSGhq56JL8FB6eI7cwoXlJTo6IjdHJ14jhy7WSCqKBzAT99qQepyYF9A1Mnr0oYKFFrBkgF8zRvVRb1Lnb600v9ar1ntq'
)

const Home = lazy (()=>import("./Pages/Home/Home"))

const Login = lazy (()=>import("./Pages/Login/Login"))

const Register = lazy (()=>import("./Pages/Register/Register.js"))

const Checkout = lazy (()=>import("./Pages/Checkout/Checkout"))

const Payment = lazy (()=>import("./Pages/Payment/Payment"))

const SingleProduct = lazy(()=>import("./Pages/SingleProduct/SingleProduct"))

function App() {
  let dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setuser(authUser))
      } else {
        dispatch(setuser(null))
      }
    })
  }, [dispatch]) 

  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Suspense fallback={<h2>Loading......</h2>}>
          <Route path='/product/:id'>
            <Header />
            <SingleProduct />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          </Suspense>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
