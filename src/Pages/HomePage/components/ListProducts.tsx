import { CardCmponent } from "../../../components/StyleComponents"
import Product from "../../../models/Product.typs"


const ListProducts = (props : Product[]) => {
  return(
    <div>
      {
        props.map(item => {
          return (
            <CardCmponent title={item.title} content={item.description} />         
          )
        })
      }
    </div>
  )
}

export default ListProducts