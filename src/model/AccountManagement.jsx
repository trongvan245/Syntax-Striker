import BaseManagement from './BaseManagement.jsx'

export default class AccountManagement extends BaseManagement {
  constructor() {
    super()
  }
  static login(email, password, myCallback) {
    const url = this.getHostUrl() + '/users/login'
    const sendData = {
      email: email,
      password: password
    }
    const success = (response) => {
      this.#saveActiveToken(response.result.access_token)
      this.#saveRefreshToken(response.result.refresh_token)
      myCallback(response)
    }
    $.ajax({
      url: url,
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(sendData),
      success: success,
      error: this.debugFailure
    })
  }

  static #saveActiveToken(token) {
    localStorage.setItem('activeToken', token)
  }

  static #saveRefreshToken(token) {
    localStorage.setItem('refreshToken', token)
  }

  static #getActiveToken() {
    return localStorage.getItem('activeToken')
  }

  static #getRefreshToken() {
    return localStorage.getItem('refreshToken')
  }

  static hello() {
    const url = this.getHostUrl() + '/hello'

    $.ajax({
      url: url,
      method: 'GET',
      contentType: 'application/json',
      headers: {
        Authorization: 'Bearer your_token_here', // if you need authorization
      },
      success: this.debugSuccess,
      error: this.debugFailure
    })
  }
}
