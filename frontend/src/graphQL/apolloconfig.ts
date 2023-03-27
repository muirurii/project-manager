import { createHttpLink,ApolloClient,InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


const httpLink = createHttpLink({
    uri: "http://localhost:5000/graphql",
    credentials: "include",
  });

  const token: string = "";

  const authLink = setContext((_, { headers }) => {
    return {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    };
  });

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
