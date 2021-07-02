import React from "react";
import Button from "@material-ui/core/Button";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, projectFirestore } from "../firebase/config";
import { useHistory } from "react-router-dom";

const Title = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user);
    const history = useHistory();

    const routeChange = () => {
        let path = `login`;
        history.push(path);
    };

    const showLogin = () => {
        if (user == null) {
            return (
                <Button
                    variant="contained"
                    component="span"
                    className="loginButton"
                    onClick={() => {
                        let path = `login`;
                        history.push(path);
                    }}
                >
                    Login
                </Button>
            );
        } else {
            return (
                <Button
                    variant="contained"
                    component="span"
                    className="loginButton"
                    onClick={() => {
                        let path = `signout`;
                        history.push(path);
                    }}
                >
                    Logout
                </Button>
            );
        }
    };
    async function handleLogout() {}
    return (
        <div className="title">
            <div className="title-bar">
                <h1>GalleryIO</h1>
                {showLogin()}
            </div>
            <h2>Jason-Kyle De Lara's Photos</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    );
};

export default Title;
