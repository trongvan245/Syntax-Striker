import BaseManagement from './BaseManagement.jsx'

export default class AccountManagement extends BaseManagement {
  constructor() {
    super()
  }

  // ======================= PUBLIC METHODS ZONE =======================

  /**
   * Check if user is authenticated
   * @param {function(bool)} myCallback - Callback function
   **/
  static async isAuth(myCallback) {
    await this.getAccountInformation((response) => {
      myCallback(response ? true : false)
    })
  }

  /**
   * Get account information
   * @param {function(response.user)} myCallback - Callback function
   **/
  static async getAccountInformation(myCallback) {
    const url = this.getHostUrl() + '/users/me'

    const success = (response) => {
      this.#saveName(response.user.name)
      this.#saveAvatarURL(response.user.avatar)
      myCallback(response.user)
    }
    const error = () => {
      this.deleteToken()
      this.clearInformation()
    }
    $.ajax({
      url: url,
      method: 'GET',
      contentType: 'application/json',
      headers: {
        Authorization: 'Bearer ' + this.#getActiveToken()
      },
      success: success,
      error: error
    })
  }

  /**
   * Login to the system
   * @param {string} email - Email
   * @param {string} password - Password
   * @param {function(response)} myCallback - Callback function
   **/
  static async login(email, password, myCallback) {
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

    // Send request to the server
    $.ajax({
      url: url,
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(sendData),
      success: success,
      error: this.debugFailure
    })
  }

  static async logout() {
    const url = this.getHostUrl() + '/users/logout'
    const sendData = {
      refresh_token: this.#getRefreshToken()
    }
    const success = () => {
      this.deleteToken()
      this.clearInformation()
      window.location.href = '/'
    }
    $.ajax({
      url: url,
      method: 'POST',
      contentType: 'application/json',
      headers: {
        Authorization: 'Bearer ' + this.#getActiveToken()
      },
      data: JSON.stringify(sendData),
      success: success,
      error: this.debugFailure
    })
  }

  /**
   * Get name of the user
   * @returns {string} Name of the user
   * */
  static getName() {
    return localStorage.getItem('name')
  }

  /**
   * Get avatar URL of the user
   * @returns {string} Avatar URL of the user
   * */
  static getAvatarURL() {
    return localStorage.getItem('avatarURL')
  }

  /**
   * Delete token from local storage
   * */
  static deleteToken() {
    localStorage.removeItem('activeToken')
    localStorage.removeItem('refreshToken')
  }

  /**
   * Clear information from local storage
   * */
  static clearInformation() {
    localStorage.removeItem('name')
    localStorage.removeItem('avatarURL')
  }

  // ======================= PRIVATE METHODS ZONE =======================

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

  static #saveName(name) {
    localStorage.setItem('name', name)
  }

  static #saveAvatarURL(avatarURL) {
    localStorage.setItem('avatarURL', avatarURL)
  }

  static async hello() {
    const url = this.getHostUrl() + '/hello'

    $.ajax({
      url: url,
      method: 'GET',
      contentType: 'application/json',
      headers: {
        Authorization: 'Bearer your_token_here' // if you need authorization
      },
      success: this.debugSuccess,
      error: this.debugFailure
    })
  }
}
