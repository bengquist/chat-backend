exports.id = "main";
exports.modules = {

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schema */ "./src/schema/index.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./src/resolvers/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models */ "./src/models/index.js");








const app = express__WEBPACK_IMPORTED_MODULE_1___default()();

app.use(cors__WEBPACK_IMPORTED_MODULE_0___default()());

const server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_2__["ApolloServer"]({
  typeDefs: _schema__WEBPACK_IMPORTED_MODULE_3__["default"],
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__["default"],
  context: {
    models: _models__WEBPACK_IMPORTED_MODULE_5__["default"],
    me: _models__WEBPACK_IMPORTED_MODULE_5__["default"].users[1],
  },
});

server.applyMiddleware({ app, path: "/graphql" });

_models__WEBPACK_IMPORTED_MODULE_5__["sequelize"].sync().then(async () => {
  app.listen({ port: 8000 }, () => {
    console.log("Apollo Server on http://localhost:8000/graphql");
  });
});


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3QjtBQUNNO0FBQ3VCOztBQUV2QjtBQUNNO0FBQ1M7O0FBRTdDLFlBQVksOENBQU87O0FBRW5CLFFBQVEsMkNBQUk7O0FBRVosbUJBQW1CLGtFQUFZO0FBQy9CLFlBQVksK0NBQU07QUFDbEIsRUFBRSw2REFBUztBQUNYO0FBQ0EsSUFBSSx1REFBTTtBQUNWLFFBQVEsK0NBQU07QUFDZCxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCx3QkFBd0Isd0JBQXdCOztBQUVoRCxpREFBUztBQUNULGNBQWMsYUFBYTtBQUMzQjtBQUNBLEdBQUc7QUFDSCxDQUFDIiwiZmlsZSI6Im1haW4uMTk4M2E0ODUzNjE1NGFhMzI1M2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XHJcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIjtcclxuXHJcbmltcG9ydCBzY2hlbWEgZnJvbSBcIi4vc2NoZW1hXCI7XHJcbmltcG9ydCByZXNvbHZlcnMgZnJvbSBcIi4vcmVzb2x2ZXJzXCI7XHJcbmltcG9ydCBtb2RlbHMsIHsgc2VxdWVsaXplIH0gZnJvbSBcIi4vbW9kZWxzXCI7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5hcHAudXNlKGNvcnMoKSk7XHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcclxuICB0eXBlRGVmczogc2NoZW1hLFxyXG4gIHJlc29sdmVycyxcclxuICBjb250ZXh0OiB7XHJcbiAgICBtb2RlbHMsXHJcbiAgICBtZTogbW9kZWxzLnVzZXJzWzFdLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuc2VydmVyLmFwcGx5TWlkZGxld2FyZSh7IGFwcCwgcGF0aDogXCIvZ3JhcGhxbFwiIH0pO1xyXG5cclxuc2VxdWVsaXplLnN5bmMoKS50aGVuKGFzeW5jICgpID0+IHtcclxuICBhcHAubGlzdGVuKHsgcG9ydDogODAwMCB9LCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkFwb2xsbyBTZXJ2ZXIgb24gaHR0cDovL2xvY2FsaG9zdDo4MDAwL2dyYXBocWxcIik7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9