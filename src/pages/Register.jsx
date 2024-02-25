import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import "../styles/Register.css"
import addAvatar from "../assets/addAvatar.png"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {

    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            //register 3 observer
            uploadTask.on(
                (error) => {
                    setError(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "users", res.user.uid),{
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        })
                    });
                }
            );
        } catch (error) {
            setError(true);
        }

    }

    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">ChitBuzz</span>
                <span className="title">Register</span>
                <form className='form' onSubmit={handleSubmit}>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input style={{ display: 'none' }} type="file" id='file' />
                    <label htmlFor="file">
                        <img src={addAvatar} />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                    {error && <span>Something went wrong!</span>}
                </form>
                <p>Have an account? <Link to="login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register
