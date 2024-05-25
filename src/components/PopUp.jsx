export default function PopUp(props) {
  return (
    <div
      className='modal fade'
      id='uploadImageModal'
      tabIndex='-1'
      aria-labelledby='uploadImageModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content d-flex justify-content-center align-items-center'>{props.text}</div>
      </div>
    </div>
  )
}
