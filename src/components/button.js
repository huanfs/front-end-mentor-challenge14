const Button = (props) =>{
    function StartTrial(e){
        if (window.confirm("Want to start you trial?")) { 
            alert("You've started you trial"); 
        }
        }
    return(
        <button onClick={StartTrial}>{props.value}</button>
    )
}

export default Button;