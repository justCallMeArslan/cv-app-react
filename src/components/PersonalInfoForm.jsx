import { useState } from "react"
import ImageUpload from "../utils/ImageUpload";
import "./PersonalInfoForm.css";

export default function PersonalInfoForm() {

    const [isPhoto, setIsPhoto] = useState(null);

    // modal + handlers for add and skip
    function handleAddPhoto() {
        setIsPhoto(true)
    }

    function handleSkipPhoto() {
        setIsPhoto(false)
    }


    return (

        <div className="personal-info-form">
            <h1> Personal information</h1>



            {isPhoto === null && (
                <div className="modal-overlay-personal">
                    <div className="modal-personal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="photo-title">
                        <h2 id="photo-title">
                            Would you like to add a photo to you CV application?
                        </h2>
                        <p>
                            Depending on country of application, photo may become
                            a good choice or very bad one. <br />
                            Please double check before continuing.
                        </p>

                        <div className="modal-actions">
                            <button type="button"
                                className="yes-button"
                                onClick={handleAddPhoto}>
                                Yes
                            </button>
                            <button type="no-button"
                                onClick={handleSkipPhoto}>
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isPhoto === true && <ImageUpload />}
        </div>
    )
}


