import { useState } from "react"
import ImageUpload from "../utils/ImageUpload";
import "./ImageAction.css";

export default function ImageAction() {

    const [isPhoto, setIsPhoto] = useState(null);
    const [photoFormat, setPhotoFormat] = useState(null);

    function handleAddPhoto() {
        setIsPhoto(true)
    }

    function handleSkipPhoto() {
        setIsPhoto(false)
    }

    function handleFormatSelect(country) {
        setPhotoFormat(country)
    }

    return (
        <div className="image-action-form">
            {isPhoto === null && ( // modal 1: checking whether we need to add photo or not
                <div className="modal-overlay-personal">
                    <div
                        className="modal-personal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="photo-title">
                        <h2 id="photo-title">
                            Would you like to add a photo to you CV application?
                        </h2>
                        <p>
                            Photo requirements vary by countery. <br />
                            Please check the requirements for your application.
                        </p>
                        <div className="modal-actions">
                            <button
                                type="button"
                                className="yes-button"
                                onClick={handleAddPhoto}>
                                Yes
                            </button>
                            <button
                                type="button"
                                className="no-button"
                                onClick={handleSkipPhoto}>
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isPhoto === true && photoFormat === null && (
                <div className="modal-overlay-personal">
                    <div
                        className="modal-personal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="format-title"
                    >
                        <h2 id="format-title">
                            Choose your photo format
                        </h2>
                        <p>
                            Select the format for your application.
                        </p>
                        <div className="modal-actions">
                            <button
                                type="button"
                                className="yes-button"
                                onClick={() =>
                                    handleFormatSelect("int")
                                }
                            >
                                Internationa/EU
                                <span> 35 x 45 mm</span>
                            </button>
                            <button
                                type="button"
                                className="yes-button"
                                onClick={() =>
                                    handleFormatSelect("us")
                                }
                            >
                                United States/US
                                <span> 51 x 51 mm</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isPhoto === true && photoFormat !== null && ( //render with selected format
                <ImageUpload photoFormat={photoFormat} />)}
        </div>
    )
}


