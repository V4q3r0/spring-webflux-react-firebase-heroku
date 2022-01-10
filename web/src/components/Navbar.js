import React from 'react'
import { Link } from 'react-router-dom'

export const PublicNavbar = () => (
  <nav>
    <section className='logo'>
      <img src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-question-online-learning-vitaliy-gorbachev-blue-vitaly-gorbachev.png"/>
    </section>
    <section>
      
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
    </section>
  </nav>
)

export const PrivateNavbar = () => (
  <nav>
    <section className='logo'>
    <img src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-question-online-learning-vitaliy-gorbachev-blue-vitaly-gorbachev.png"/>
    </section>
    <section>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/new">New</Link>
      <Link to="/list">List</Link>
    </section>
    <section className='profile'>
      <Link to={"/profile"}>
        <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-user-management-kiranshastry-lineal-color-kiranshastry-20.png"/>
      </Link>
    </section>
  </nav>
)
