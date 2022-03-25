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
      console.log(err.errors[0].message);
    }
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { cart, currency, setCart, setProductQuantity } = this.props;

    const handleAddToCart = () => {
      const productData = {
        id: this.state.productData.id,
        name: this.state.productData.name,
        brand: this.state.productData.brand,
        prices: this.state.productData.prices,
        inStock: this.state.productData.inStock,
        gallery: this.state.productData.gallery,
        selectedAttributes: this.state.attributes,
        attributes: this.state.productData.attributes,
      };

      const equalProduct = cart.products.find((element) => {
        return (
          element.id === productData.id &&
          element.selectedAttributes.text.join(
            element.selectedAttributes.swatch
          ) ===
            productData.selectedAttributes.text.join(
              productData.selectedAttributes.swatch
            )
        );
      });

      if (equalProduct !== undefined) {
        setProductQuantity({
          operation: "increment",
          id: productData.id,
          selectedAttributes: productData.selectedAttributes,
        });
      } else setCart({ ...productData, quantity: 1 });
    };

    const handleSelectedAttributes = (variation, item) => {
      const attributes = {
        text: { ...this.state.attributes.text },
        swatch: { ...this.state.attributes.swatch },
      };

      if (
        this.state.attributes[variation.type] &&
        this.state.attributes[variation.type][variation.name] !== undefined
      ) {
        attributes[variation.type] = {
          ...this.state.attributes[variation.type],
          [variation.name]: item.displayValue,
        };
      } else {
        attributes[variation.type] = {
          ...this.state.attributes[variation.type],
          [variation.name]: item.displayValue,
        };
      }

      this.setState({ attributes: { ...attributes } });
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
            <img
              src={this.state.currentImage}
              alt={this.state.productData.name}
            />
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
                      <S.AttributeButton
                        key={index}
                        type="button"
                        btnStyle={
                          (variation.type === "text" &&
                            this.state.attributes.text &&
                            this.state.attributes.text[variation.name] ===
                              item.displayValue &&
                            "secondary") ||
                          "primary"
                        }
                        active={
                          variation.type === "swatch" &&
                          this.state.attributes.swatch &&
                          this.state.attributes.swatch[variation.name] ===
                            item.displayValue
                        }
                        onClick={() => {
                          handleSelectedAttributes(variation, item);
                        }}
                      >
                        {(variation.type === "swatch" && (
                          <S.SwatchFiller backgroundColor={item.displayValue} />
                        )) ||
                          item.displayValue}
                      </S.AttributeButton>
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
                      handleAddToCart();
                    } else alert("Select product variations to add!");
                    return;
                  } else handleAddToCart();
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
