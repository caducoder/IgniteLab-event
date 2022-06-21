import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ocmtmg1r9y01xrc0psdb3s/master',
    cache: new InMemoryCache()
})