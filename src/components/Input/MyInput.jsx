import './MyInput.css'

export default function MyInput(props){
    return (
        <div className="inputWrapper">
           <label htmlFor={props.name}>{props.label}</label> 
           <input 
           id={props.name}
           name={props.type}
           type={props.type}
           placeholder={props.placeholder}
           className="myInput"
           />
        </div>
    )
}