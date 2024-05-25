import BaseManagement from './BaseManagement.jsx'
import $ from 'jquery'

export default class MenuManagement extends BaseManagement {
  constructor() {
    super()
  }

  // ======================= PUBLIC METHODS ZONE =======================
  static async getMenuList(mySuccessCallback, myFailureCallback) {
    const url = this.getHostUrl() + '/menu/get-menu'
    const success = (response) => {
      mySuccessCallback(response.items)
    }
    const error = (response) => {
      myFailureCallback(response)
    }
    const body = {
      menu_id: this.getMenuId()
    }
    $.ajax({
      url: url,
      method: 'POST',
      contentType: 'application/json',
      headers: {
        Authorization: 'Bearer ' + this.getActiveToken()
      },
      data: JSON.stringify(body),
      success: success,
      error: error
    })
  }

  static async updateMenu(data, mySuccessCallback, myFailureCallback) {
    const url = this.getHostUrl() + '/menu/update-menu'
    const success = (response) => {
      mySuccessCallback(response)
    }
    const error = (response) => {
      myFailureCallback(response)
    }
    const menuItems = {
      food_items: data
    }
    $.ajax({
      url: url,
      method: 'POST',
      contentType: 'application/json',
      headers: {
        Authorization: 'Bearer ' + this.getActiveToken()
      },
      data: JSON.stringify(menuItems),
      success: success,
      error: error
    })
  }
}
