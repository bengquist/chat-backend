import { ApolloServer, gql } from "apollo-server-express";
import cors from "cors";
import "dotenv/config";
import express from "express";

const port = process.env.PORT || 4000;

const app = express();

app.use(cors());

const users = {
  1: {
    id: "1",
    username: "Blake",
  },
  2: {
    id: "2",
    username: "Ashlynn",
  },
};

const schema = gql`
  type Query {
    me: User
    users: [User!]
    user(id: ID!): User
  }

  type User {
    id: ID!
    username: String!
  }
`;

const resolvers = {
  Query: {
    // @ts-ignore
    me: (_, __, { me }) => {
      return me;
    },
    // @ts-ignore
    user: (_, { id }: { id: number }) => {
      // @ts-ignore
      return users[id];
    },
    users: () => {
      return Object.values(users);
    },
  },

  User: {
    username: ({ username }: any) => {
      return username;
    },
  },
};

const server = new ApolloServer({
  context: {
    me: users[1],
  },
  resolvers,
  typeDefs: schema,
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port }, () => {
  // tslint:disable-next-line:no-console
  console.info(`Apollo Server on http://localhost:${port}/graphql`);
});

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}
