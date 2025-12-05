import { CiFileOn } from "react-icons/ci";
import "./stylec.scss"
import Dropzone from "./Drop.jsx";
import { GoPlus } from "react-icons/go";

function FileList({ files, onDrop }) {


    return (
        <div className="File-list">



            {files.map((v, i) => (
                <div key={i}>
                    <CiFileOn />
                    <span>index.html</span>
                </div>
            ))
            }





            <div>
                <Dropzone onDrop={onDrop} textElement={

                    <span className="add-more-files">
                        <GoPlus />
                        <p>Add File </p>
                        <span>(Upto 5 mb)</span>
                    </span>
                } />
            </div>
        </div>
    )
}

export default FileList;