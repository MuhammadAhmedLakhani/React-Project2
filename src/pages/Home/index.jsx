import logo from "../../assets/logo.svg"
import "./CSS/style.scss";

import TEXTCOLOR from '../../assets/text-color.svg';
import TEXTGREY from '../../assets/text-grey.svg';
import FILECOLOR from '../../assets/file-color.svg';
import FILEGREY from '../../assets/file-grey.svg';


function HomePage() {
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

                    <div >
                        <img src={TEXTCOLOR} alt="" />                        
                    </div>
                     
                    <div >
                        <img src={FILEGREY} alt="" />                        
                    </div>
                     

                </div>

                <div className="card-container">
                    <div className="text-section">
                        <h1>TEXT</h1>
                    </div>
                    <div className="file-section">
                        <h1>FILES</h1>

                    </div>

                </div>




            </div>
        </div>
    )

}

export default HomePage;