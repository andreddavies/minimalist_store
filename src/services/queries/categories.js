import { apiConfig } from "../apiConfig";
import { gql } from "@apollo/client";

const GET_CATEGORIES = async () => {
  return await apiConfig
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
