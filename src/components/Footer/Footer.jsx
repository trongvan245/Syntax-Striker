import styles from './Footer.module.scss'
function ContactInfo(props) {
  return (
    <div className={`d-flex align-items-center justify-content-center flex-column ${styles.contactInfo}`}>
      <p className='h6'>{props.name}</p>
      <p className='h6'>{props.email}</p>
      <p className='h6'>{props.phone}</p>
    </div>
  )
}

export default function Footer() {
  return (
    <>
      <footer className={`bg-secondary-3 text-white text-center pb-3 overflow-scroll ${styles.footer}`}>
        <div className={`bg-primary-dark d-flex justify-content-around p-3 ${styles.contactBox}`}>
          <ContactInfo name='Thái Nguyễn Gia Bảo' email='another.email@example.com' phone='+^_^' />
          <ContactInfo name='Lê Hồng Phúc' email='phuc.lechieuvinh@hcmut.edu.vn' phone='+84 962 534 955' />
          <ContactInfo name='Nguyễn Ngọc Minh Quốc' email='???@???.com' phone='@_@' />
          <ContactInfo name='Nguyễn Truyền Tuấn' email='???@???.com' phone=':>>' />
          <ContactInfo name='Bùi Trọng Văn' email='yet.another@example.com' phone=':))' />
        </div>
        <p
          className='mb-0 mt-3'
          style={{
            fontSize: '0.8rem'
          }}
        >
          Copyright © 2024 Syntax Striker. All rights reserved.
        </p>
      </footer>
    </>
  )
}
