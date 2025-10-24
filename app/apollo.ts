import { HttpLink, InMemoryCache } from "@apollo/client";
import {
  createApolloLoaderHandler,
  ApolloClient,
} from "@apollo/client-integration-react-router";

export const makeClient = (request?: Request) => {
  return new ApolloClient({
    link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
    cache: new InMemoryCache(),
  });
};
export const apolloLoader = createApolloLoaderHandler(makeClient);