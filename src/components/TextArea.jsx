import { useRef } from "react"
import "./stylec.scss"





function TextArea({onChange}){

    let textareaRef = useRef()


    let changeHeight = ()=> {

        textareaRef.current.style.height = "24px"

        textareaRef.current.style.height = textareaRef.current.scrollHeight + 12 + "px"


    }


    return (


            <textarea className="text-area" placeholder="Type Something" ref={textareaRef} onInput={()=>changeHeight()} onChange={onChange}   ></textarea>
          
    )
}


export default TextArea