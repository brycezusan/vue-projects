import api from "../api"

const api_key = import.meta.env.VITE_API_KEY

export const getClimaByParams = async (data)=>{
  const {ciudad , pais} = data

  try {
    const data =  await  api(`/geo/1.0/direct?q=${ciudad},${pais}&appid=${api_key}`)
    return data
  } catch (error) {
    console.log(error)
  }
}


export const getClimaLatLon = async (lat , lon)=>{

  try {
    const data = await api(`/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
    return data
  } catch (error) {
    console.log(error)
  }

}
