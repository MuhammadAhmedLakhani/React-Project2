import logo from "../../assets/logo.svg"
import "./CSS/style.scss";
import TextArea from "../../components/TextArea.jsx"


import TEXTCOLOR from '../../assets/text-color.svg';
import TEXTGREY from '../../assets/text-grey.svg';
import FILECOLOR from '../../assets/file-color.svg';
import FILEGREY from '../../assets/file-grey.svg';
import { useState } from "react";
import Themebutton from "../../components/Button.jsx";
import Dropzone from "../../components/Drop.jsx"


function HomePage() {

    let [type, settype] = useState("text");
    let [textValue, setTextValue] = useState("");



    return (



        <div className="container">
            <div className="header-bar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div>
                    <ul className="menu-bar">

                        <li>How it works</li>
                        <li>Download</li>
                        <li>Upgrade</li>
                        <li>Feedback</li>
                        <li className="menu-btn">Login / Register</li>
                    </ul>
                </div>

            </div>
            <div className="main-card">

                <div className="card-sidebar">

                    <div onClick={() => { settype("text") }} className={type === "text" ? "activate-text" : ""}  >
                        <img src={type === "text" ? TEXTCOLOR : TEXTGREY} alt="" />
                    </div>

                    <div onClick={() => { settype("file") }}
                        className={type === "file" ? "activate-file" : ""} >
                        <img src={type === "file" ? FILECOLOR : FILEGREY} alt="" />
                    </div>


                </div>

                <div className="card-container">
                    {type === "text" ?

                        
                        <div className="text-section">
                            <h1>Text</h1>
                            <div className="resizeSection">
                            <TextArea value = {textValue} onChange = {(e)=> setTextValue(e.target.value)}  />
                            </div>
                            <div className="theme-btn-section">
                                <span>Clear</span>
                                <Themebutton disabled = {!textValue}  title={"Save"}/>
                            </div>
                        </div>
                        

                        :
                        <div className="file-section">
                            <h1>Files</h1>

                            <Dropzone/>
                        </div>

                    }
                </div>




            </div>
        </div>
    )

}

export default HomePage;