import { dataConfig } from "../dataConfig";
import { gql } from "@apollo/client";

const GET_CURRENCIES = async () => {
  return await dataConfig.query({
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
