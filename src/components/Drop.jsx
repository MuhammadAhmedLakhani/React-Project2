import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import "./stylec.scss"

function Dropzone({textElement}) {
    const onDrop = acceptedFiles => {

        // Do something with the files
        console.log("Aceepted Files", acceptedFiles)

    }
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div className='drop-zone'    {...getRootProps()}>
            <input {...getInputProps()} />

            <div>
                 {textElement}
            </div>



        </div>
    )
}


export default Dropzone;