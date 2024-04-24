import api from "../api"

export const getCriptos = async()=>{
  try {
    const {data} = await api("top/mktcapfull?limit=10&tsym=USD")
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getCriptoQuote = async (data)=>{
  const {cripto , moneda} =  data
  try {
    const {data} = await api(`/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`)
    return data.DISPLAY[cripto][moneda]
  } catch (error) {
    console.log(error)
  }
}