import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
// import { About } from './components/About'
import { Navbar } from './components/Navbar'
// import { OrderSummary } from './components/OrderSummary'
// import { NewProducts } from './components/NewProducts'
// import { FeaturedProducts } from './components/FeaturedProducts'
// import { Products } from './components/Products'
// import { NoMatch } from './components/NoMatch'
// import { Users } from './components/Users'
// import { UserDetails } from './components/UserDetails'
import { Admin } from './components/Admin'
import { AuthProvider } from './components/auth'
import { Login } from './components/Login'
import { Profile } from './components/Profile'
import { RequireAuth } from './components/RequireAuth'

const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path='about'
          element={
            <React.Suspense fallback='Loading...'>
              <LazyAbout />
            </React.Suspense>
          }
        />
  
      </Routes>
    </AuthProvider>
  )
}

export default App
