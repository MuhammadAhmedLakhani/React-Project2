import { CiFileOn } from "react-icons/ci";
import "./stylec.scss"
import Dropzone from "./Drop.jsx";
import { GoPlus } from "react-icons/go";

function FileList() {

    return (
        <div className="File-list">
            <div>
                <CiFileOn />
                <span>index.html</span>
            </div>
            <div>
                <Dropzone textElement={

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