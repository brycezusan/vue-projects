import api from "@/api";


export default{
  obtenerDatos(){
    return api("/registros") 
  },
  obtenerData(id){
    return api("/registros/"+id)
  },
  createRegister(data){
    return api.post("/registros",data)
  },
  updateRegister(id , data){
    return api.put("/registros/"+id,data)
  },
  updateState(id , estado){
    return api.patch("/registros/"+id, estado) 
  },
  deleteRegister(id){
    return api.delete("/registros/"+id)
  }
 
}