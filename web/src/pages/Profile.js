import React, { useState } from "react";
import firebase from "../firebase/firebase_config"
import { useAuthState } from "react-firebase-hooks/auth";

const auth = firebase.auth();

const Profile = ({ dispatch }) => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [photoURL, setPhotoURL] = useState(user.photoURL);
    const [result, setResult] = useState("")
    const actualizarDatos = (e) => {
        e.preventDefault();
        user.updateProfile({
            displayName: name,
            photoURL: photoURL
            }).then(() => {
                setResult("You have updated your personal data.")
            }).catch((error) => {
                setResult("An error has occurred and your personal data could NOT be updated.")
        });
        user.updateEmail(email).then(() => {
            setResult("You have updated your personal data.")
        }).catch((error) => {

        });
    }
    return(
        <section className="data-profile">
            <form>
                <img src={user.photoURL} />
                <br />
                <section>
                    <label>Name and surname: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </section>
                <section>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </section>
                <section>
                    <label>Imagen URL: </label>
                    <input type="email" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
                </section>
                <section>
                    <button onClick={e => actualizarDatos(e)} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Update
                    </button>
                </section>
            </form>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><b>Data update</b></h5>
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