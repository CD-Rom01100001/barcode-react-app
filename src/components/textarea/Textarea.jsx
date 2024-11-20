import './textarea.css';

const Textarea = (props) => {
  return (
    <div className="wrap-textarea">
      <textarea 
        name="numbers" 
        className='textarea' 
        rows="10" 
        cols="33"
        ref={props.refComp}>
      </textarea>
    </div>
  )
}

export default Textarea;