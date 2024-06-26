interface ButtonGenericProps {
  text: string
  OnClick: () => void
  addicionalStyles? : string
}

const ButtonGeneric = (props: ButtonGenericProps) => {
  return(
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${props.addicionalStyles}`}
      onClick={props.OnClick}
    >
      {props.text}
    </button>
  )
}

export default ButtonGeneric