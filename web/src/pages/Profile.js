import React, { useState } from "react";
import firebase from "../firebase/firebase_config"
import { useAuthState } from "react-firebase-hooks/auth";

const auth = firebase.auth();



const Profile = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [result, setResult] = useState("")
    const actualizarDatos = (e) => {
        e.preventDefault();
        user.updateProfile({
            displayName: name,
            email: email
            }).then(() => {
                setResult("Haz actualizado tus datos personales.")
            }).catch((error) => {
                setResult("Ha ocurrido un error y NO se pudo actualizar tus datos personales.")
        });
    }
    return(
        <section className="data-profile">
            <form>
                <img src={user.photoURL} />
                <br />
                <section>
                    <label>Nombres y Apellidos: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </section>
                <section>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </section>
                <section>
                    <button onClick={e => actualizarDatos(e)} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Actualizar
                    </button>
                </section>
            </form>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><b>Actualización de datos</b></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {result}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;