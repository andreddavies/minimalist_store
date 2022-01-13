import React from "react";
import { connect } from "react-redux";
import { store } from "../../../store";
import { Link } from "react-router-dom";

import Heading from "../../atoms/Heading/Heading";
import CartIcon from "../../../icons/AddToCartIcon";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import FlexContainer from "../../atoms/FlexContainer/FlexContainer";

import * as S from "./ProductList.styles";

class ProductList extends React.Component {
  render() {
    const productId = "ps-5";
    const { dispatch } = store;
    const rootState = store.getState().store;

    return (
      <S.Container>
        <S.List>
          {this.props.products.map((element, index) => (
            <S.ListItem key={index}>
              <Link
                to={`/product/${productId}`}
                style={{ textDecoration: "none" }}
              >
                <FlexContainer
                  width="100%"
                  direction="column"
                  styleProps="padding: 16px"
                >
                  <S.ImageWrapper inStock={element.inStock}>
                    <img
                      alt="ProductOne"
                      src="https://i.zst.com.br/thumbs/12/3e/2f/1340384387.jpg"
                    />
                    <S.IconWrapper
                      onClick={(e) => {
                        e.preventDefault();

                        dispatch.store.setCart({
                          quantity: (rootState.cart.quantity += 1),
                          products: [...rootState.cart.products, element],
                        });
                      }}
                    >
                      <CartIcon width={52} height={52} />
                    </S.IconWrapper>
                  </S.ImageWrapper>
                  <S.ProductInfoWrapper>
                    <Heading color="primary" size="18px" weight="300">
                      {element.title}
                    </Heading>
                    <S.PriceWrapper inStock={element.inStock}>
                      <Paragraph color="secondary" size="18px" weight="500">
                        {rootState.currency.symbol}
                        {element.price}
                      </Paragraph>
                    </S.PriceWrapper>
                  </S.ProductInfoWrapper>
                </FlexContainer>
              </Link>
            </S.ListItem>
          ))}
        </S.List>
      </S.Container>
    );
  }
}

const mapState = (state) => ({
  store: state.store,
});

const mapDispatch = (dispatch) => ({
  setCart: dispatch.store.setCart,
});

export default connect(mapState, mapDispatch)(ProductList);
