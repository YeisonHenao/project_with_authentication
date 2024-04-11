import instance from '../../config/store.axios'

/**
 * Función asincrona para consumir endpoint de obtener un productor por ID
 * @param id Number -> ID del producto a buscar para obtener su información especifica
 * @returns 
 */
export default async function FetchProductById(id: number) {
  try{
    const response = await instance.get(`/products/${id}`)
    return response.data
  } catch(err){
    console.error(err)
    throw new Error("Algo salio mal")
  }
}