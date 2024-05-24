import AccountManagement from './model/AccountManagement.jsx'
export default function Test() {
  const logIn = () => {
    AccountManagement.login('nekan123@gmail.com', 'Trongvan123456', (response) => {
      console.log(response)
    })
    // AccountManagement.hello()
  }
  return (
    <div>
      <button onClick={logIn}>Test</button>
    </div>
  )
}
