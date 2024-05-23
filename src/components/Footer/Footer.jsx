function ContactInfo(props) {
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <p className='h5'>{props.name}</p>
      <p className='h5'>{props.email}</p>
      <p className='h5'>{props.phone}</p>
    </div>
  )
}

// function Card(props) {
//   return (
//     <div className='card d-flex justify-content-center align-items-center' style={{ width: '18rem' }}>
//       <img
//         className='card-img-top'
//         src={props.image ? props.image : 'https://i.pinimg.com/originals/65/c1/07/65c107dc3add2c77d047bd940c201698.jpg'}
//         alt='Card image cap'
//         style={{
//           maxWidth: '200px'
//         }}
//       />
//       <div className='card-body text-center'>
//         <h5 className='card-title'>{props.title}</h5>
//         <p className='card-text text-center'>{props.text}</p>
//         <a href={props.link} target='_blank' className='btn btn-primary'>
//           Detail
//         </a>
//       </div>
//     </div>
//   )
// }

export default function Footer() {
  return (
    <>
      <footer className='bg-secondary-3 text-white text-center pb-3'>
        <div className='bg-primary-dark d-flex justify-content-around p-3 overflow-scroll'>
          <ContactInfo name='Thái Nguyễn Gia Bảo' email='another.email@example.com' phone='+^_^' />
          <ContactInfo name='Lê Hồng Phúc' email='phuc.lechieuvinh@hcmut.edu.vn' phone='+84 962 534 955' />
          <ContactInfo name='Nguyễn Ngọc Minh Quốc' email='???@???.com' phone='@_@' />
          <ContactInfo name='Nguyễn Truyền Tuấn' email='???@???.com' phone=':>>' />
          <ContactInfo name='Bùi Trọng Văn' email='yet.another@example.com' phone=':))' />
        </div>
        <p className='mb-0 mt-3'>Copyright © 2024 Syntax Striker. All rights reserved.</p>
      </footer>
    </>
  )
}
