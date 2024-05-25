import BaseManagement from './BaseManagement.jsx'
import $ from 'jquery'

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
      this.#saveMenuId(response.user.menu_id)
      myCallback(response.user)
    }
    const error = () => {
      this.deleteToken()
      this.clearInformation()
      this.deleteMenuId()
    }
    $.ajax({
      url: url,
      method: 'GET',
      contentType: 'application/json',
      headers: {
        Authorization: 'Bearer ' + this.getActiveToken()
      },
      success: success,
      error: error
    })
  }

  /**
   * Update account information
   * @param {Object} data - Data to update
   * @param {function(response)} mySuccessCallback - Callback function for success
   * @param {function(response)} myFailureCallback - Callback function for failure
   */
  static async updateAccountInformation(data, mySuccessCallback, myFailureCallback) {
    const url = this.getHostUrl() + '/users/me'
    const success = (response) => {
      this.#saveName(response.user.name)
      this.#saveAvatarURL(response.user.avatar)
      this.#saveMenuId(response.user.menu_id)
      mySuccessCallback(response.user)
    }
    const error = (response) => {
      myFailureCallback(response)
    }
    $.ajax({
      url: url,
      method: 'POST',
      contentType: 'application/json',
      headers: {
        Authorization: 'Bearer ' + this.getActiveToken()
      },
      data: JSON.stringify(data),
      success: success,
      error: error
    })
  }

  /**
   * Login to the system
   * @param {string} email - Email
   * @param {string} password - Password
   * @param {function(response)} mySuccessCallback - Callback function for success
   * @param {function(response)} myFailureCallback - Callback function for failure
   **/
  static async login(email, password, mySuccessCallback, myFailureCallback) {
    const url = this.getHostUrl() + '/users/login'
    const sendData = {
      email: email,
      password: password
    }
    const success = (response) => {
      this.#saveActiveToken(response.result.access_token)
      this.#saveRefreshToken(response.result.refresh_token)
      mySuccessCallback(response)
    }

    const failure = (response) => {
      myFailureCallback(response)
    }

    // Send request to the server
    $.ajax({
      url: url,
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(sendData),
      success: success,
      error: failure
    })
  }

  static async logout() {
    const url = this.getHostUrl() + '/users/logout'
    const sendData = {
      refresh_token: this.getRefreshToken()
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
        Authorization: 'Bearer ' + this.getActiveToken()
      },
      data: JSON.stringify(sendData),
      success: success,
      error: this.debugFailure
    })
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

  static deleteMenuId() {
    localStorage.removeItem('menuId')
  }

  static imageUploader(formData, mySuccessCallback, myFailureCallback) {
    const url = this.getHostUrl() + '/users/avatar'
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      headers: {
        Authorization: 'Bearer ' + this.getActiveToken()
      },
      success: mySuccessCallback,
      error: myFailureCallback
    })
  }

  // ======================= PRIVATE METHODS ZONE =======================

  static #saveActiveToken(token) {
    localStorage.setItem('activeToken', token)
  }

  static #saveRefreshToken(token) {
    localStorage.setItem('refreshToken', token)
  }
  static #saveName(name) {
    localStorage.setItem('name', name)
  }

  static #saveAvatarURL(avatarURL) {
    localStorage.setItem('avatarURL', avatarURL)
  }

  static #saveMenuId(menuId) {
    localStorage.setItem('menuId', menuId)
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
