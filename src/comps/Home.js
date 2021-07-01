import React, { useState } from "react";
import Title from "./Title";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";

function Home() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <>
            <Title />
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            {selectedImg && (
                <Modal
                    selectedImg={selectedImg}
                    setSelectedImg={setSelectedImg}
                />
            )}
        </>
    );
}

export default App;
