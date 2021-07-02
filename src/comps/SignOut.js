import React, { useEffect } from "react";
import { auth } from "../firebase/config";
import { useHistory } from "react-router-dom";

function SignOut() {
    const history = useHistory();

    useEffect(() => {
        auth.signOut();
        let path = `/`;
        history.push(path);
    }, []);
    return <div></div>;
}
export default SignOut;
