import React from 'react'
import { Link } from 'react-router-dom'

export const PublicNavbar = () => (
  <nav>
    <section>
      {/*<img style={{width: '80px', height: '50px'}} src='https://impactagroup.es/wp-content/uploads/2020/03/preguntas-respuestas-1.jpg' />*/}
    </section>
    <section>
      
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
    </section>
  </nav>
)

export const PrivateNavbar = () => (
  <nav>
    <section>
      {/*<img style={{width: '100px', height: '70px'}} src="../public/images/logo.jpg" />*/}
    </section>
    <section>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/new">New</Link>
      <Link to="/list">List</Link>
    </section>
  </nav>
)
