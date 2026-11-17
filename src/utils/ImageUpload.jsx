import { useState } from "react";
import "./ImageUpload.css"

export default function ImageUpload({ photoFormat }) {
    const [image, setImage] = useState(null);

    function hnadleImageChange(e) {
        const file = e.target.files?.[0];
        e.target.value = ""; // allows to reselect the same file again, reseting value


        if (!file || !file.type.startsWith("image/")) return; // MIME validation

        if (image) { //clean up the previous preview
            URL.revokeObjectURL(image.preview);
        }

        const preview = URL.createObjectURL(file);
        setImage({
            file,
            preview
        });
    }
    function handleRemoveImage() {
        if (image) {
            URL.revokeObjectURL(image.preview);
        }
        setImage(null);
    }

    return (
        <div className={`image-upload photo-${photoFormat}`}>
            <label className="upload-box">
                {image ? (
                    <img
                        src={image.preview}
                        alt="Selected preview"
                        className="image-preview"
                    />) : (
                    <span className="plus">
                        Click on {<br />} + {<br />} to upload photo
                    </span>
                )}

                <input
                    type="file"
                    accept="image/*"
                    onChange={hnadleImageChange}
                    hidden
                />
            </label>

            {image && (
                <div className="actions">
                    <span>
                        Click on the image to pick another one.
                    </span>
                    <span>
                        Click on
                    </span>
                    <button
                        type="button"
                        onClick={handleRemoveImage}>
                        Remove
                    </button>
                    <span>
                        to delete it.
                    </span>
                </div>
            )}
        </div>
    )
}

