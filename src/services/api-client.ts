import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5b064f134dad47b2ae0af59a947c4324'
  }
})