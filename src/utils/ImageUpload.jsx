import { useEffect, useState } from "react";
import "./ImageUpload.css"

export default function ImageUpload() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (!image) {
            return
        } else {
            return () => URL.revokeObjectURL(image.preview);
        };
    }, [image]);

    function hnadleImageChange(e) {
        const file = e.target.files?.[0];
        if (!file || !file.type.startsWith("image/")) return; // MIME validation

        const preview = URL.createObjectURL(file);
        setImage({
            file,
            preview
        })

        e.target.value = ""; // allows to reselect the same file again, reseting value
    }

    return (
        <div className="image-upload">
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
                        Click on image to choose another one or
                    </span>
                    <button onClick={() => setImage(null)}>
                        Remove
                    </button>
                    <span>
                        to delete
                    </span>
                </div>
            )}
        </div>
    )
}

