export default class BaseManagement {
  constructor() {}

  static getActiveToken() {
    return localStorage.getItem('activeToken')
  }

  static getRefreshToken() {
    return localStorage.getItem('refreshToken')
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

  static getHostUrl() {
    return 'https://syntax-striker.onrender.com'
  }

  static debugSuccess(response) {
    console.log(response)
  }

  static debugFailure(response) {
    console.log(response)
  }
}
