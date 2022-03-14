import React from "react";
import parse from "html-react-parser";
import { connect } from "react-redux";

import { GET_PRODUCT } from "../../../services/queries/products";

import Button from "../../atoms/Button/Button";
import FlexContainer from "../../atoms/FlexContainer/FlexContainer";

import * as S from "./Product.styles";

class Product extends React.Component {
  state = {
    attributes: {},
    productData: {},
    currentImage: "",
    productGallery: [],
  };

  getProduct = async () => {
    try {
      const data = await GET_PRODUCT(this.props.productId);

      this.setState({
        productData: data.product,
        productGallery: data.product.gallery,
        currentImage: data.product.gallery[0],
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleSelectedAttributes = (variation, item) => {
    if (variation.type === "swatch") {
      this.setState({
        attributes: {
          swatch: item.displayValue,
          text:
            (this.state.attributes.text && this.state.attributes.text) || null,
        },
      });
    } else
      this.setState({
        attributes: {
          swatch:
            (this.state.attributes.swatch && this.state.attributes.swatch) ||
            null,
          text: item.displayValue,
        },
      });
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { cart, currency, setCart, setProductQuantity } = this.props;

    const handleAddToCart = (payload) => {
      const dataToDispatch = {
        product: {
          id: payload.id,
          name: payload.name,
          brand: payload.brand,
          prices: payload.prices,
          inStock: payload.inStock,
          gallery: payload.gallery,
          attributes: payload.attributes,
          selectedAttributes: payload.selectedAttributes,
        },
      };
      const product = cart.products.find((product) => {
        return (
          product.id === payload.id &&
          product.selectedAttributes === payload.selectedAttributes
        );
      });

      if (product !== undefined) {
        setProductQuantity({
          operation: "increment",
          id: dataToDispatch.product.id,
          selectedAttributes: dataToDispatch.product.selectedAttributes,
        });
      } else setCart({ ...dataToDispatch, quantity: 1 });
    };

    return (
      <FlexContainer
        wrap="wrap"
        width="100%"
        justify="flex-start"
        margin="5.7rem 0 0 0"
      >
        <S.GalleryContainer>
          <S.SmallImagesWrapper>
            {this.state.productGallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={this.state.productData.name}
                onClick={() => {
                  this.setState({
                    currentImage: image,
                  });
                }}
                selected={this.state.currentImage === image}
              />
            ))}
          </S.SmallImagesWrapper>
          <S.ImageWrapper>
            <img alt="Product image" src={this.state.currentImage} />
          </S.ImageWrapper>
        </S.GalleryContainer>
        <S.ProductDetailsContainer>
          <FlexContainer
            width="100%"
            direction="column"
            tabletMinScreen="width: 70%"
          >
            <FlexContainer width="100%" direction="column" align="flex-start">
              <S.Title weight="600">{this.state.productData.brand}</S.Title>
              <S.Title weight="400">{this.state.productData.name}</S.Title>
            </FlexContainer>
            {this.state.productData.attributes !== undefined &&
              this.state.productData.attributes.map((variation, index) => (
                <div key={index}>
                  <FlexContainer styleProps="margin-top: 3.07rem;">
                    <S.Title weight="700" size="1.29rem">
                      {variation.name}:
                    </S.Title>
                  </FlexContainer>
                  <FlexContainer width="100%" justify="space-start">
                    {variation.items.map((item, index) => (
                      <Button
                        key={index}
                        width="63px"
                        height="45px"
                        type="button"
                        disabled={false}
                        margin="0 10px 0 0" // Change it to style on Product.styles.js file importing button
                        btnStyle={
                          (variation.type === "text" &&
                            this.state.attributes !== {} &&
                            this.state.attributes.text === item.displayValue &&
                            "secondary") ||
                          "primary" ||
                          "primary"
                        }
                        styleProps={
                          variation.type === "swatch" &&
                          this.state.attributes !== {} &&
                          this.state.attributes.swatch === item.displayValue &&
                          "border: 4px solid #d3d3d3;"
                        }
                        onClick={() =>
                          this.handleSelectedAttributes(variation, item)
                        }
                      >
                        {(variation.type === "swatch" && (
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              background: item.value,
                            }}
                          />
                        )) ||
                          item.displayValue}
                      </Button>
                    ))}
                  </FlexContainer>
                </div>
              ))}
            <FlexContainer
              width="100%"
              direction="column"
              align="flex-start"
              styleProps="margin-top: 2.85rem;"
            >
              <S.Title weight="700" size="1.29rem">
                Price:
              </S.Title>
              <S.Title weight="700" size="1.7rem">
                {currency.symbol}
                {this.state.productData.prices !== undefined &&
                  this.state.productData.prices.find(
                    (el) => el.currency.label === currency.label
                  ).amount}
              </S.Title>
            </FlexContainer>
            <FlexContainer
              width="100%"
              direction="column"
              justify="space-between"
              styleProps="margin-top: 1.43rem;"
            >
              <Button
                width="100%"
                fontWeight="600"
                fontSize="1.15rem"
                btnStyle="tertiary"
                onClick={() => {
                  if (this.state.productData.attributes.length > 0) {
                    if (
                      this.state.attributes.swatch ||
                      this.state.attributes.text
                    ) {
                      handleAddToCart({
                        ...this.state.productData,
                        selectedAttributes: this.state.attributes,
                      });
                    } else alert("Select product variations to add!");
                    return;
                  } else
                    handleAddToCart({
                      ...this.state.productData,
                      selectedAttributes: this.state.attributes,
                    });
                }}
              >
                ADD TO CART
              </Button>
              <S.Paragraph>
                {parse(`${this.state.productData.description}`)}
              </S.Paragraph>
            </FlexContainer>
          </FlexContainer>
        </S.ProductDetailsContainer>
      </FlexContainer>
    );
  }
}

const mapState = (state) => ({
  cart: state.store.cart,
  currency: state.store.currency,
});

const mapDispatch = (dispatch) => ({
  setCart: dispatch.store.setCart,
  setProductQuantity: dispatch.store.setProductQuantity,
});

export default connect(mapState, mapDispatch)(Product);
