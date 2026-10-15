import { useState } from "react"
import ImageUpload from "../utils/ImageUpload";

export default function PersonalInfoForm() {

    const [isPhoto, setIsPhoto] = useState(null);

    function handleAddPhoto(){
        setIsPhoto()
    }
   



    return (

        <div>
            {isPhoto && <ImageUpload />}
        </div>
    )
}


