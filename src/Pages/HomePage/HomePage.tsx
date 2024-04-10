import { ButtonGeneric, ContainerComponent } from "../../components/StyleComponents/index"
import HomePageController from "../../Controller/HomePageController"
import { useEffect } from "react";

export const HomePage = () => {

  const controller = new HomePageController();

  useEffect(() => {
    controller.getAllProducts()
  }) 

  return (
      <ContainerComponent>
          <div className="page">HomePage</div>
          <ButtonGeneric text="Test" OnClick={() => console.log("Hello world")} />
      </ContainerComponent>
  )
}