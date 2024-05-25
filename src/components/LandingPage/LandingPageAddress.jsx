import {MDBTypography } from 'mdb-react-ui-kit'

function Address() {
  return (
    <div id='contactLandingPage' className='container mt-4' style={{ textAlign: 'left', lineHeight: 2 }}>
      <div className='row align-items-start'>
        <div className='col'>
          <MDBTypography
            variant='h1'
            style={{
              fontSize: '45px',
              fontWeight: 'bold',
              textAlign: 'center',

            }}
          >
             Trụ sở của chúng tôi
          </MDBTypography>
          <p>
            <strong>Chi nhánh 1: Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh</strong>
            <br />
            <strong>Chi nhánh 2: 268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh</strong>
            <br />
          </p>
          <div className='container' style={{ textAlign: 'center' }}>
            <table className='table table-bordered table-striped table-hover'>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Opening Time</th>
                  <th>Closing Time</th>
                </tr>
              </thead>
              <tbody style={{ fontWeight: 500 }}>
                <tr>
                  <td>Monday</td>
                  <td>7 AM</td>
                  <td>10 PM</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>7 AM</td>
                  <td>10 PM</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>7 AM</td>
                  <td>10 PM</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>7 AM</td>
                  <td>10 PM</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>7 AM</td>
                  <td>10 PM</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>6 AM</td>
                  <td>11 PM</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td colSpan={2}>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p />
        </div>
        <div className='col'>
          <div
            style={{
              textDecoration: 'none',
              overflow: 'hidden',
              maxWidth: '100%',
              width: 600,
              height: 500
            }}
          >
            <div id='my-map-canvas' style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
              <iframe
                style={{ height: '100%', width: '100%', border: 0 }}
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416692!2d106.80047917480627!3d10.870008889284488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1716362472326!5m2!1svi!2s'
              />
            </div>
            <a className='my-codefor-googlemap' href='https://www.bootstrapskins.com/themes' id='enable-map-info'>
              premium bootstrap themes
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address
