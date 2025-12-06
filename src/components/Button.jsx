function Themebutton ({disabled,  title , onClick}) {
    return (
        <div>

       
        
        <button  style={{borderColor :  disabled && "#9ea0a1" }} disabled = {disabled}  className="theme-btn" onClick={onClick} >
            {title}
        </button>
        </div>
    )
}   


export default Themebutton;