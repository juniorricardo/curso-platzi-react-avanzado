import React from 'react'
import { GlobalStyle } from './components/styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { Router } from '@reach/router'
import Context from './Context'
const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

export const App = () => {
  return (
    <div>
      <Logo />
      <GlobalStyle />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />

      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth ? <Router>
              <Favs path='/favs/' />
              <User path='/user' />
            </Router> : <Router>
              <NotRegisteredUser path='/favs' />
              <NotRegisteredUser path='/user' />
            </Router>
        }
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
