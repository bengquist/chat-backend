import { ApolloServer, gql } from "apollo-server-express";
import cors from "cors";
import "dotenv/config";
import express from "express";

const app = express();

app.use(cors());

const schema = gql`
  type Query {
    me: User
  }

  type User {
    username: String!
  }
`;

const resolvers = {
  Query: {
    me: () => {
      return {
        username: "Robin Wieruch",
      };
    },
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs: schema,
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: 8000 }, () => {
  // tslint:disable-next-line:no-console
  console.info("Apollo Server on http://localhost:8000/graphql");
});
