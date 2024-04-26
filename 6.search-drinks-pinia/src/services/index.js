import api from "@/api"

export const getCategories = async ()=>{
  const {data} = await api("/list.php?c=list")
  return data
}

export const getDrinksByParams = async (busqueda)=>{
  const {ingrediente , categoria} = busqueda
  const {data} = await api(`/filter.php?i=${ingrediente}&c=${categoria}`)
  return data
}

export const getDrinkById = async (id)=>{
  const {data} = await api(`/lookup.php?i=${id}`)
  return data
}
