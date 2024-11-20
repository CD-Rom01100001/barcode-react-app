import './outField.css';

const OutField = (props) => {
  return (
   <div className="wrap-out-field">
    <div className="out-field">{props.barcode}</div>
   </div>
  )
}

export default OutField;