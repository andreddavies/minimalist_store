import { apiConfig } from "../apiConfig";
import { gql } from "@apollo/client";

const GET_CURRENCIES = () => {
  return apiConfig
    .query({
      query: gql`
        query {
          currencies {
            symbol
            label
          }
        }
      `,
    })
    .then((response) => {
      return response.data;
    });
};

export { GET_CURRENCIES };
