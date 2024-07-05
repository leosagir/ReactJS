import MyButton from "../components/myButton/myButton";

export default function Lesson02(){
    const handleClick = () =>{
        console.log('click')
    }
    const handleSubmit = () =>{
        console.log('submit')
    }
    const handleTurtle = () =>{
        console.log('🐢')
    }

    return(
        <div className="lesson-container">
            <h4>Lesson 02</h4>
            <p>React Props: способ обмена данными из компонента в компонент</p>
        <h5>Мы хотим использовать наш компонент кнопку с разными данными</h5>
        <div>
        <MyButton onClick={handleClick} name={'click'}/>
        <MyButton onClick={handleSubmit} name={'submit'}/>
        <MyButton onClick={handleTurtle} name={'🐢'}/>
        </div>
        </div>
    )
}