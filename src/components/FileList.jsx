import { CiFileOn } from "react-icons/ci";
import "./stylec.scss";
import Dropzone from "./Drop.jsx";
import { GoPlus } from "react-icons/go";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";


function FileList({ files, onDrop }) {

    


    return (


        <div className="File-list">

            {
                files.map((v, i) => {
                    let icon;
                    let type = v[0].type
                    console.log(type)
                    
                    switch(type){
                        case "text/html":
                        icon =  <FaHtml5 />
                        break
                        case "text/css":
                            icon = <FaCss3Alt />
                            break
                        case "text/javascript":
                            icon = <IoLogoJavascript />
                            break
                        default:
                            icon = <CiFileOn />
                    }

                    return (

                        <div key={i}  >

                            {icon}




                            <span className="file-name">
                                {v[0].name.slice(0,10)}{v[0].name.slice(v[0].name.indexOf("."))} </span>

                        </div>
                        )
                })
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
    
 )}

export default FileList;