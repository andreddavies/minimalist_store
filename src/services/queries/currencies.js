import { apiConfig } from "../apiConfig";
import { gql } from "@apollo/client";

const GET_CURRENCIES = async () => {
  return await apiConfig.query({
    query: gql`
      query {
        currencies {
          symbol
          label
        }
      }
    `,
  });
};

export { GET_CURRENCIES };
