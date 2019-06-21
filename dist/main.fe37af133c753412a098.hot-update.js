exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
var cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));
__webpack_require__(/*! dotenv/config */ "dotenv/config");
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var port = process.env.PORT || 4000;
var app = express_1.default();
app.use(cors_1.default());
var users = {
    1: {
        id: "1",
        username: "Blake",
    },
    2: {
        id: "2",
        username: "Ashlynn",
    },
};
var schema = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    me: User\n    users: [User!]\n    user(id: ID!): User\n  }\n\n  type User {\n    id: ID!\n    username: String!\n  }\n"], ["\n  type Query {\n    me: User\n    users: [User!]\n    user(id: ID!): User\n  }\n\n  type User {\n    id: ID!\n    username: String!\n  }\n"])));
var resolvers = {
    Query: {
        me: function (_, __, _a) {
            var me = _a.me;
            return me;
        },
        user: function (_, _a) {
            var id = _a.id;
            return users[id];
        },
        users: function () {
            return Object.values(users);
        },
    },
    User: {
        username: function (_a) {
            var username = _a.username;
            return username;
        },
    },
};
var server = new apollo_server_express_1.ApolloServer({
    context: {
        me: users[1],
    },
    resolvers: resolvers,
    typeDefs: schema,
});
server.applyMiddleware({ app: app, path: "/graphql" });
app.listen({ port: port }, function () {
    console.info("Apollo Server on http://localhost:" + port + "/graphql");
});
if (true) {
    module.hot.accept();
    module.hot.dispose(function () { return server.stop(); });
}
var templateObject_1;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsZ0NBQWdDLHVDQUF1QyxhQUFhLEVBQUUsRUFBRSxPQUFPLGtCQUFrQjtBQUNqSDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQyxvREFBdUI7QUFDN0QsNkJBQTZCLG1CQUFPLENBQUMsa0JBQU07QUFDM0MsbUJBQU8sQ0FBQyxvQ0FBZTtBQUN2QixnQ0FBZ0MsbUJBQU8sQ0FBQyx3QkFBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx3SEFBd0gsZ0VBQWdFLGlCQUFpQix5Q0FBeUMsd0JBQXdCLGdFQUFnRSxpQkFBaUIseUNBQXlDO0FBQ3BZO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNELHdCQUF3Qiw2QkFBNkI7QUFDckQsWUFBWSxhQUFhO0FBQ3pCO0FBQ0EsQ0FBQztBQUNELElBQUksSUFBVTtBQUNkO0FBQ0Esb0NBQW9DLHNCQUFzQixFQUFFO0FBQzVEO0FBQ0EiLCJmaWxlIjoibWFpbi5mZTM3YWYxMzNjNzUzNDEyYTA5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGFwb2xsb19zZXJ2ZXJfZXhwcmVzc18xID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTtcclxudmFyIGNvcnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY29yc1wiKSk7XHJcbnJlcXVpcmUoXCJkb3RlbnYvY29uZmlnXCIpO1xyXG52YXIgZXhwcmVzc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJleHByZXNzXCIpKTtcclxudmFyIHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwMDA7XHJcbnZhciBhcHAgPSBleHByZXNzXzEuZGVmYXVsdCgpO1xyXG5hcHAudXNlKGNvcnNfMS5kZWZhdWx0KCkpO1xyXG52YXIgdXNlcnMgPSB7XHJcbiAgICAxOiB7XHJcbiAgICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICAgIHVzZXJuYW1lOiBcIkJsYWtlXCIsXHJcbiAgICB9LFxyXG4gICAgMjoge1xyXG4gICAgICAgIGlkOiBcIjJcIixcclxuICAgICAgICB1c2VybmFtZTogXCJBc2hseW5uXCIsXHJcbiAgICB9LFxyXG59O1xyXG52YXIgc2NoZW1hID0gYXBvbGxvX3NlcnZlcl9leHByZXNzXzEuZ3FsKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIHR5cGUgUXVlcnkge1xcbiAgICBtZTogVXNlclxcbiAgICB1c2VyczogW1VzZXIhXVxcbiAgICB1c2VyKGlkOiBJRCEpOiBVc2VyXFxuICB9XFxuXFxuICB0eXBlIFVzZXIge1xcbiAgICBpZDogSUQhXFxuICAgIHVzZXJuYW1lOiBTdHJpbmchXFxuICB9XFxuXCJdLCBbXCJcXG4gIHR5cGUgUXVlcnkge1xcbiAgICBtZTogVXNlclxcbiAgICB1c2VyczogW1VzZXIhXVxcbiAgICB1c2VyKGlkOiBJRCEpOiBVc2VyXFxuICB9XFxuXFxuICB0eXBlIFVzZXIge1xcbiAgICBpZDogSUQhXFxuICAgIHVzZXJuYW1lOiBTdHJpbmchXFxuICB9XFxuXCJdKSkpO1xyXG52YXIgcmVzb2x2ZXJzID0ge1xyXG4gICAgUXVlcnk6IHtcclxuICAgICAgICBtZTogZnVuY3Rpb24gKF8sIF9fLCBfYSkge1xyXG4gICAgICAgICAgICB2YXIgbWUgPSBfYS5tZTtcclxuICAgICAgICAgICAgcmV0dXJuIG1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXNlcjogZnVuY3Rpb24gKF8sIF9hKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IF9hLmlkO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlcnNbaWRdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXNlcnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModXNlcnMpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIHVzZXJuYW1lOiBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIHVzZXJuYW1lID0gX2EudXNlcm5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VybmFtZTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxudmFyIHNlcnZlciA9IG5ldyBhcG9sbG9fc2VydmVyX2V4cHJlc3NfMS5BcG9sbG9TZXJ2ZXIoe1xyXG4gICAgY29udGV4dDoge1xyXG4gICAgICAgIG1lOiB1c2Vyc1sxXSxcclxuICAgIH0sXHJcbiAgICByZXNvbHZlcnM6IHJlc29sdmVycyxcclxuICAgIHR5cGVEZWZzOiBzY2hlbWEsXHJcbn0pO1xyXG5zZXJ2ZXIuYXBwbHlNaWRkbGV3YXJlKHsgYXBwOiBhcHAsIHBhdGg6IFwiL2dyYXBocWxcIiB9KTtcclxuYXBwLmxpc3Rlbih7IHBvcnQ6IHBvcnQgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5pbmZvKFwiQXBvbGxvIFNlcnZlciBvbiBodHRwOi8vbG9jYWxob3N0OlwiICsgcG9ydCArIFwiL2dyYXBocWxcIik7XHJcbn0pO1xyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxuICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXIuc3RvcCgpOyB9KTtcclxufVxyXG52YXIgdGVtcGxhdGVPYmplY3RfMTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==