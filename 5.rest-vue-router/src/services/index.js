import ClienteService from "./ClienteService"

export const getRegistros = async ()=>{
  try {
    const {data} = await ClienteService.obtenerDatos()  
    return data  
  } catch (error) {
    console.log(error)
  }
}

export const getData = async(id)=>{
  const {data} =  await  ClienteService.obtenerData(id)
  return data
}

export const createNewRegister = async (data)=>{
  await ClienteService.createRegister(data)
}

export const updateDataRegister = async ( id , data)=>{
  await ClienteService.updateRegister(id , data)
}

export const updateStateById = async (id , estado)=>{
  await ClienteService.updateState(id , estado)
}

export const deleteRegister = async (id)=>{
  await ClienteService.deleteRegister(id)
}
