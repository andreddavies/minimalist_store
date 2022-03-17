import { apiConfig } from "../apiConfig";
import { gql } from "@apollo/client";

const GET_CATEGORIES = () => {
  return apiConfig
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
      return response.data;
    });
};

export { GET_CATEGORIES };
