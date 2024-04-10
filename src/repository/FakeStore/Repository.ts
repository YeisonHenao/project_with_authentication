import instance from '../../config/store.axios'

export async function fetchProducts() {
  try {
    const response = await instance.get('/products');
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error("Algo salio mal");
    
  }
}

