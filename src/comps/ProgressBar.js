import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile, caption, setCaption, setForm }) => {
    const { progress, url } = useStorage(file, caption);
    // console.log(progress);

    useEffect(() => {
        if (url) {
            setFile(null);
            setCaption(null);
            setForm(null);
        }
    }, [url, setFile]);

    return (
        <motion.div
            className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + "%" }}
        ></motion.div>
        // <div className="progress-bar" style={{ width: progress + "%" }}></div>
    );
};

export default ProgressBar;
