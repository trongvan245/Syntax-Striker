import BaseManagement from './BaseManagement.jsx'
import $ from 'jquery'

export default class MenuManagement extends BaseManagement {
  constructor() {
    super()
  }

  // ======================= PUBLIC METHODS ZONE =======================
  static async getMenuList(mySuccessCallback, myFailureCallback) {
    const url = this.getHostUrl() + '/menu'
    const success = (response) => {
      mySuccessCallback(response)
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
      success: success,
      error: error
    })
  }
}
