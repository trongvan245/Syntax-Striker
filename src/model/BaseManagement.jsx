export default class BaseManagement {
  constructor() {}

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
