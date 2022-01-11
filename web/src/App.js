import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import { login, logout } from './actions/authActions';

import { PublicNavbar, PrivateNavbar } from './components/Navbar'
import HomePage from './pages/HomePage'
import SingleQuestionPage from './pages/SingleQuestionPage'
import QuestionsPage from './pages/QuestionsPage'
import QuestionFormPage from './pages/QuestionFormPage'
import AnswerFormPage from './pages/AnswerFormPage'
import OwnerQuestionsPage from './pages/OwnerQuestionsPage'
import Profile from './pages/Profile'
import { Footer } from './components/Footer';
import firebase from './firebase/firebase_config'
import { useAuthState } from "react-firebase-hooks/auth";

const auth = firebase.auth();

const App = ({ dispatch }) => {
  const [user] = useAuthState(auth);
  if(user){
    dispatch(login(user.email, user.uid))
  }
  const find = (e) => {
    e.preventDefault();
    console.log("Buscar")
  }
  return (
    <Router>
      {user ?
        <>
          <PrivateNavbar find={find} />
          <Switch>
            <Route exact path="/" component={() => {
              return <HomePage><SignOut dispatch={dispatch} /></HomePage>
            }} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/questions" component={QuestionsPage} />
            <Route exact path="/question/:id" component={SingleQuestionPage} />
            <Route exact path="/list" component={OwnerQuestionsPage} />
            <Route exact path="/answer/:id" component={AnswerFormPage} />
            <Route exact path="/new" component={QuestionFormPage} />
            <Redirect to="/" />
          </Switch>
        </> :
        <>
          <PublicNavbar find={find} />
          <Switch>
            <Route exact path="/" component={() => {
              return <HomePage><Register dispatch={dispatch} /><SignIn dispatch={dispatch} /></HomePage>
            }} />
            <Route exact path="/questions" component={QuestionsPage} />
            <Route exact path="/question/:id" component={SingleQuestionPage} />
            <Route exact path="/answer/:id" component={AnswerFormPage} />
            <Redirect to="/" />
          </Switch>
        </>
      }
      <Footer />
    </Router>
  )
}

function Register() {
  const [userRegistro, setUserRegistro] = useState({
    name: "",
    email: "",
    password: "",
    photoURL: ""
  })
  const registerUser = () => {
    auth.createUserWithEmailAndPassword(userRegistro.email, userRegistro.password)
    .then((currentUser) => {
      currentUser.user.updateProfile({
        displayName: userRegistro.name,
        photoURL: userRegistro.photoURL
      }).then(() => {
      }).catch((error) => {
        alert(error)
      })
    })
    .catch((error) => {
      //Error con el inicio de sessión
    })
  }
  return (
    <div>
      <button className="btn btn-success right m-1" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">Register</button>
      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"><b>Register.</b></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <section className="form-register">
                <form>
                     <label>Username: </label>
                    <input type="text" placeholder="Escribe un nombre de usuario: " onChange={(e) => setUserRegistro({...userRegistro, name: e.target.value})} />
                    <br /> 
                    <label>Email: </label>
                    <input type="email" placeholder="Escribe un email: " onChange={(e) => setUserRegistro({...userRegistro, email: e.target.value})} />
                    <br /> 
                    <label>Password: </label>
                    <input type="password" placeholder="Escribe una contraseña: " onChange={(e) => setUserRegistro({...userRegistro, password: e.target.value})} />
                    <br /> 
                    <label>URL Photo Profile: </label>
                    <input type="text" placeholder="Ingresa el link de tú imagen de perfíl: " onChange={(e) => setUserRegistro({...userRegistro, photoURL: e.target.value})} />
                    <br /> 
                </form>
              </section>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={registerUser} >Registrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

function SignIn({dispatch}) {
  const [userLogin, setUserLogin] = useState({
    name: "",
    password: "",
  });
  const signInWithUserAndPassword = () => {
    firebase.auth().signInWithEmailAndPassword(userLogin.name, userLogin.password)
    .then((userCredential) => {
      
    })
    .catch((error) => {

    });
  }
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <button className="btn btn-primary right m-1" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal3">Sign in</button>
      <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"><b>Sign in.</b></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <section className="form-register">
                <form>
                     <label>Email: </label>
                    <input type="text" placeholder="Escribe su email: " onChange={(e) => setUserLogin({...userLogin, name: e.target.value})} />
                    <br /> 
                    <label>Password: </label>
                    <input type="password" placeholder="Escriba su contraseña: " onChange={(e) => setUserLogin({...userLogin, password: e.target.value})} />
                    <br />
                </form>
              </section>
              <div style={{textAlign: 'center'}}>
                <button className="btn btn-secondary m-2" data-bs-dismiss="modal" onClick={signInWithGoogle}>Sign in with google</button>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={signInWithUserAndPassword} >Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

function SignOut({ dispatch }) {
  return (
    auth.currentUser && (
      <button
        className="button right"
        onClick={() => {
          dispatch(logout())
          auth.signOut();
        }}
      >
        Sign out
      </button>
    )
  );
}


export default App
