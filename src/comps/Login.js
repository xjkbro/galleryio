import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { auth, provider, projectFirestore } from "../firebase/config";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
    const history = useHistory();
    const [user, loading] = useAuthState(auth);
    const signIn = () => {
        let app = auth.signInWithPopup(provider).catch(alert);
    };
    useEffect(() => {
        if (user) {
            let path = `/`;
            history.push(path);
        }
    }, [user]);

    return (
        <Container>
            <LoginContainer>
                <Logo>GalleryIO</Logo>
                <p></p>
                <Button onClick={signIn} variant="outlined">
                    Sign In with Google
                </Button>
            </LoginContainer>
        </Container>
    );
}
export default Login;
const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    /* background-color: #495057; */
`;
const LoginContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
    > button {
        border: none;
        :hover {
            background-color: #e9ecef;
        }
    }
`;
const Logo = styled.div`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;
