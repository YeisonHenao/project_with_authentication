import { ButtonGeneric } from "../components/StyleComponents/ButtonComponent"

export const HomePage = () => {
  return (
      <div>
        <div className="page">HomePage</div>
        <ButtonGeneric text="Test" OnClick={() => console.log("Hello world")} />
      </div>
  )
}