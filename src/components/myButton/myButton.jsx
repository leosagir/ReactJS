import './myButton.css';

export default function MyButton({type, onClick, name}) {
  
  return (
    <button onClick={onClick} className="myButton" type={type}>
      {name}
    </button>
  );
}