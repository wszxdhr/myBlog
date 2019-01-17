export default function (axios) {
  axios.interceptors.response.use((data) => {
    if (data.data) {
      return data.data
    } else {
      return data
    }
  })
  return axios
}
