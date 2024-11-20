import './button.css';

const Button = (props) => {
  return (
    <div className="wrap-button">
      <button 
      className="button" 
      onClick={props.funcComp}>
        {props.buttonName}
      </button>
    </div>
  )
}

export default Button;