"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(cors_1.default());
const schema = apollo_server_express_1.gql `
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
const server = new apollo_server_express_1.ApolloServer({
    resolvers,
    typeDefs: schema,
});
server.applyMiddleware({ app, path: "/graphql" });
app.listen({ port: 8000 }, () => {
    // tslint:disable-next-line:no-console
    console.info("Apollo Server on http://localhost:8000/graphql");
});
//# sourceMappingURL=index.js.map