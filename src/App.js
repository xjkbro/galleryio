import React, { useState, useEffect } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Login from "./comps/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, projectFirestore } from "./firebase/config";
import firebase from "firebase";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            projectFirestore.collection("users").doc(user.uid).set(
                {
                    name: user.displayName,
                    email: user.email,
                    lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
                    photoURL: user.photoURL,
                },
                { merge: true }
            );
        }
    }, [user]);

    // if (loading) return <Loading />;
    // if (!user) return <Login />;
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

function Home() {
    const [selectedImg, setSelectedImg] = useState(null);
    const [user, loading] = useAuthState(auth);
    return (
        <div className="App">
            <Title />
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            {selectedImg && (
                <Modal
                    selectedImg={selectedImg}
                    setSelectedImg={setSelectedImg}
                />
            )}
            {console.log(user)}
        </div>
    );
}

export default App;
