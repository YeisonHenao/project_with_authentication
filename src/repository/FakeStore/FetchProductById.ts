import instance from '../../config/store.axios'

export default async function FetchProductById(id: number) {
  try{
    const response = await instance.get(`/products/${id}`)
    return response.data
  } catch(err){
    console.error(err)
    throw new Error("Algo salio mal")
  }
}