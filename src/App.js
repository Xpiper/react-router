import react from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
// import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import { UserDetail } from './components/UserDetail';
import React from 'react';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/auth';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';
const LazyAbout = react.lazy(() => import('./components/About'))

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={
          <React.Suspense fallback='loading'>
            <LazyAbout />
          </React.Suspense>
        } />
        <Route path='/order-summary' element={<OrderSummary />} />
        <Route path='/products' element={<Products />} >
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='/users' element={<Users></Users>} >
          <Route path=':userId' element={<UserDetail></UserDetail>}></Route>
        </Route>
        <Route path='/users/:userId' element={<UserDetail></UserDetail>}></Route>
        <Route path='*' element={<NoMatch />} />
        <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes >
    </AuthProvider>
  );
}

export default App;
