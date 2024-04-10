import { ButtonGeneric, ContainerComponent } from "../../components/StyleComponents/index"

export const HomePage = () => {
  return (
      <ContainerComponent>
          <div className="page">HomePage</div>
          <ButtonGeneric text="Test" OnClick={() => console.log("Hello world")} />
      </ContainerComponent>
  )
}