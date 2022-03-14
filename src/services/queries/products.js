import { apiConfig } from "../apiConfig";
import { gql } from "@apollo/client";

const GET_PRODUCT = (id) => {
  return apiConfig
    .query({
      query: gql`
        query ($productId: String!) {
          product(id: $productId) {
            id
            name
            brand
            inStock
            gallery
            category
            description
            prices {
              amount
              currency {
                label
                symbol
              }
            }
            attributes {
              id
              name
              type
              items {
                id
                value
                displayValue
              }
            }
          }
        }
      `,
      variables: {
        productId: id,
      },
    })
    .then((result) => {
      return result.data;
    });
};

const GET_PRODUCTS = (category) => {
  return apiConfig
    .query({
      query: gql`
        query ($categoryName: String!) {
          category(input: { title: $categoryName }) {
            products {
              id
              name
              brand
              inStock
              gallery
              category
              prices {
                amount
                currency {
                  label
                  symbol
                }
              }
              attributes {
                type
                items {
                  id
                  value
                  displayValue
                }
              }
            }
          }
        }
      `,
      variables: {
        categoryName: category,
      },
    })
    .then((result) => {
      return result.data;
    });
};

export { GET_PRODUCT, GET_PRODUCTS };
