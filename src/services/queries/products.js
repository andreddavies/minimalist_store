import { apiConfig } from "../apiConfig";
import { gql } from "@apollo/client";

const GET_PRODUCT = async (id) => {
  return await apiConfig.query({
    query: gql`
        query{
            product(id: "${id}"){
                id
                name
                brand
                inStock
                gallery
                category
                description
                prices{
                    amount
                    currency{
                        label 
                        symbol
                    } 
                } 
                attributes{
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
  });
};

const GET_PRODUCTS = async () => {
  return await apiConfig.query({
    query: gql`
      query {
        category {
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
          }
        }
      }
    `,
  });
};

export { GET_PRODUCT, GET_PRODUCTS };
