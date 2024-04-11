import instance from '../../config/store.axios'

/**
 * Función tipo asincrona para realizar petición al endpoint de obtener todos los productos
 * @returns 
 */
export default async function fetchProducts() {
  try {
    const response = await instance.get('/products');
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error("Algo salio mal");
    
  }
}

