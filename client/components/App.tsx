import { useState, useEffect } from 'react'
import Header from './Header'
import UserInfo from './userInfo'

const App = () => {
  return (
    <>
    <header>
      <Header />
    </header>
    <main>
      <UserInfo />
    </main>
    <footer>
    </footer>
    </>
  )
}

export default App
