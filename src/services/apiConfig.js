import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apiConfig = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});
