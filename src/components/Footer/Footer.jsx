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
          <ContactInfo name='Thái Nguyễn Gia Bảo' email='bao.thainguyenkhmt@hcmut.edu.vn' phone='+84 332 504 557' />
          <ContactInfo name='Lê Hồng Phúc' email='phuc.lechieuvinh@hcmut.edu.vn' phone='+84 962 534 955' />
          <ContactInfo name='Nguyễn Ngọc Minh Quốc' email='22521214@gm.uit.edu.vn' phone='+84 971 944 204' />
          <ContactInfo name='Nguyễn Truyền Tuấn' email='tuan.nguyenkhmtk22@hcmut.edu.vn' phone='+84 914 243 306' />
          <ContactInfo name='Bùi Trọng Văn' email='van.bui240504@hcmut.edu.vn' phone='+84 764 547 013' />
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
