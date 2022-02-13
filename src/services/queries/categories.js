import { dataConfig } from "../dataConfig";
import { gql } from "@apollo/client";

const GET_CATEGORIES = async () => {
  return await dataConfig
    .query({
      query: gql`
        query {
          categories {
            name
          }
        }
      `,
    })
    .then((response) => {
      return response;
    });
};

export { GET_CATEGORIES };
