function ContactInfo(props) {
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <p className='h5'>{props.name}</p>
      <p className='h5'>{props.email}</p>
      <p className='h5'>{props.phone}</p>
    </div>
  )
}

export default function Footer() {
  return (
    <>
      <footer className='bg-secondary-3 text-white text-center pb-3'>
        <div className='bg-primary-dark d-flex justify-content-around p-3'>
          <ContactInfo name='Thái Nguyễn Gia Bảo' email='another.email@example.com' phone='+^_^' />
          <ContactInfo name='Lê Hồng Phúc' email='phuc.lechieuvinh@hcmut.edu.vn' phone='+84 962 534 955' />
          <ContactInfo name='Nguyễn Ngọc Minh Quốc' email='???@???.com' phone='@_@' />
          <ContactInfo name='Nguyễn Truyền Tuấn' email='???@???.com' phone=':>>' />
          <ContactInfo name='Bùi Trọng Văn' email='yet.another@example.com' phone=":))" />
        </div>
        <p className='mb-0 mt-3'>Copyright © 2024 Syntax Striker. All rights reserved.</p>
      </footer>
    </>
  )
}
