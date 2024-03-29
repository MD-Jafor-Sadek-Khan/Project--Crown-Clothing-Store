import { useContext } from "react"
import { Button_Type_ClassName } from "../Button/Buttom.component"
import "./product-card.styles.jsx"
import { CartIconContext } from "../../Context/CartIcon.context"
import {
  ButtonStyled,
  FooterStyled,
  NameStyled,
  PriceStyled,
  ProductCardContainerStyled,
  ProductCardImageStyled,
} from "./product-card.styles.jsx"

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product
  const { addItemsToCart } = useContext(CartIconContext)
  const addProductToCart = () => {
    addItemsToCart(product)
  }
  return (
    <ProductCardContainerStyled>
      <ProductCardImageStyled src={imageUrl} alt={name} />
      <FooterStyled>
        <NameStyled>{name}</NameStyled>
        <PriceStyled>{price}</PriceStyled>
      </FooterStyled>
      <ButtonStyled
        buttonType={Button_Type_ClassName.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </ButtonStyled>
    </ProductCardContainerStyled>
  )
}

export default ProductCard
