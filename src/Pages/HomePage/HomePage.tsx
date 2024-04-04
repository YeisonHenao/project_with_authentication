import { ButtonGeneric } from "../../components/StyleComponents/ButtonComponent"
import { ContainerComponent } from "../../components/StyleComponents/ContainerComponent"

export const HomePage = () => {
  return (
      <ContainerComponent>
          <div className="page">HomePage</div>
          <ButtonGeneric text="Test" OnClick={() => console.log("Hello world")} />
      </ContainerComponent>
  )
}