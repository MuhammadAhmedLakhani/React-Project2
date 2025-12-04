function Themebutton ({disabled,  title , onClick}) {
    return (
        <div>

        {
            console.log(disabled)    
        }
        <button  style={{borderColor :  disabled && "#9ea0a1" }} disabled = {disabled}  className="theme-btn">
            {title}
        </button>
        </div>
    )
}   


export default Themebutton;