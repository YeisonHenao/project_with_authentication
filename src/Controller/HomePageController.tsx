import { FetchProducts } from "../repository/FakeStore"

export default class HomePageController {
  async getAllProducts(){
    const info = await FetchProducts();
    return info
  }
}