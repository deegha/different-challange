/**
 * Created by Deegha 10/04/2019
 */
import {API_BASE_URL} from '../config/config'

class BackendClient {

  constructor() {
    this.baseUrl = API_BASE_URL
    this.headers = {
			"Content-Type": "application/json",
			"Accept" : "application/json"
		}
  }

  get = async (path, version) => {
    try{
      const response = await fetch(`${this.baseUrl}/${version}/${path}`, {
        headers: this.headers
      })
      return response.json()
    }catch(err) {
      return err
    }
  }
}

export const backendClient = new BackendClient()
