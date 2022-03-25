import React from "react";
import { connect } from "react-redux";

import LoadSpinner from "../../atoms/LoadSpinner/LoadSpinner";
import ProductCard from "../../atoms/ProductCard/ProductCard";

import { GET_PRODUCTS } from "../../../services/queries/products";

import * as S from "./ProductList.styles";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsList: [],
    };
  }

  getProducts = async (reqParam) => {
    try {
      const data = await GET_PRODUCTS(reqParam);

      this.setState({ productsList: data.category.products });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getProducts(this.props.currentCategory);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentCategory !== this.props.currentCategory)
      this.getProducts(this.props.currentCategory);
  }

  render() {
    return (
      <S.Container>
        <S.List>
          {(!this.state.productsList.length > 0 && <LoadSpinner />) ||
            this.state.productsList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </S.List>
      </S.Container>
    );
  }
}

const mapState = (state) => ({
  currentCategory: state.store.currentCategory,
});

export default connect(mapState, null)(ProductList);
