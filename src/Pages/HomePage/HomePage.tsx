import { ContainerComponent } from "../../components/StyleComponents"
import { useEffect, useState } from "react"
import HomePageController from "../../Controller/HomePageController"
import Product from "../../models/Product.typs"

const HomePage = () => {
  const [product, setProducts] = useState<Product[]>([])

  const controller = new HomePageController()

  useEffect(() => {
    getProducts()
  })

  const getProducts = async () => {
    try {
      const response = await controller.getAllProducts();
      console.log(response)
      setProducts(response)
    } catch (err){
      console.error(err)
    }
  }

  return(
    <ContainerComponent>
      <ul>
        {
          product.map((item) => {
            return (
              <li id={item.id.toString()}>{item.title}</li>
            )
          })
        }
      </ul>
    </ContainerComponent>
  )
}

export default HomePage