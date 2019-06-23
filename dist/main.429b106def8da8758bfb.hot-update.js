exports.id = "main";
exports.modules = {

/***/ "./src/resolvers/index.js":
/*!********************************!*\
  !*** ./src/resolvers/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/resolvers/user.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./src/resolvers/message.js");



/* harmony default export */ __webpack_exports__["default"] = ([_user__WEBPACK_IMPORTED_MODULE_0__["default"], _message__WEBPACK_IMPORTED_MODULE_1__["default"]]);


/***/ }),

/***/ "./src/resolvers/message.js":
/*!**********************************!*\
  !*** ./src/resolvers/message.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    messages: (parent, args, { models }) => {
      return Object.values(models.messages);
    },
    message: (parent, { id }, { models }) => {
      return models.messages[id];
    },
  },

  Mutation: {
    createMessage: (parent, { text }, { me, models }) => {
      const id = uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()();
      const message = {
        id,
        text,
        userId: me.id,
      };

      models.messages[id] = message;
      models.users[me.id].messageIds.push(id);

      return message;
    },

    deleteMessage: (parent, { id }, { models }) => {
      const { [id]: message, ...otherMessages } = models.messages;

      if (!message) {
        return false;
      }

      models.messages = otherMessages;

      return true;
    },
  },

  Message: {
    user: (message, args, { models }) => {
      return models.users[message.userId];
    },
  },
});


/***/ }),

/***/ "./src/resolvers/user.js":
/*!*******************************!*\
  !*** ./src/resolvers/user.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    users: (parent, args, { models }) => {
      return Object.values(models.users);
    },
    user: (parent, { id }, { models }) => {
      return models.users[id];
    },
    me: (parent, args, { me }) => {
      return me;
    },
  },

  User: {
    messages: (user, args, { models }) => {
      return Object.values(models.messages).filter(
        message => message.userId === user.id,
      );
    },
  },
});


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVzb2x2ZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNvbHZlcnMvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb2x2ZXJzL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDTTs7QUFFMUIsZ0VBQUMsNkNBQWEsRUFBRSxnREFBZ0IsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDSGpEO0FBQUE7QUFBQTtBQUE2Qjs7QUFFZDtBQUNmO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkM7QUFDQSxLQUFLO0FBQ0wsdUJBQXVCLEtBQUssR0FBRyxTQUFTO0FBQ3hDO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSw2QkFBNkIsT0FBTyxHQUFHLGFBQWE7QUFDcEQsaUJBQWlCLDhDQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUwsNkJBQTZCLEtBQUssR0FBRyxTQUFTO0FBQzlDLGFBQWEsa0NBQWtDOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM3Q0Y7QUFBZTtBQUNmO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEM7QUFDQSxLQUFLO0FBQ0wsb0JBQW9CLEtBQUssR0FBRyxTQUFTO0FBQ3JDO0FBQ0EsS0FBSztBQUNMLHdCQUF3QixLQUFLO0FBQzdCO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSw0QkFBNEIsU0FBUztBQUNyQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUMsRUFBQyIsImZpbGUiOiJtYWluLjQyOWIxMDZkZWY4ZGE4NzU4YmZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlclJlc29sdmVycyBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBtZXNzYWdlUmVzb2x2ZXJzIGZyb20gXCIuL21lc3NhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFt1c2VyUmVzb2x2ZXJzLCBtZXNzYWdlUmVzb2x2ZXJzXTtcclxuIiwiaW1wb3J0IHV1aWR2NCBmcm9tIFwidXVpZC92NFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFF1ZXJ5OiB7XHJcbiAgICBtZXNzYWdlczogKHBhcmVudCwgYXJncywgeyBtb2RlbHMgfSkgPT4ge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhtb2RlbHMubWVzc2FnZXMpO1xyXG4gICAgfSxcclxuICAgIG1lc3NhZ2U6IChwYXJlbnQsIHsgaWQgfSwgeyBtb2RlbHMgfSkgPT4ge1xyXG4gICAgICByZXR1cm4gbW9kZWxzLm1lc3NhZ2VzW2lkXTtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgTXV0YXRpb246IHtcclxuICAgIGNyZWF0ZU1lc3NhZ2U6IChwYXJlbnQsIHsgdGV4dCB9LCB7IG1lLCBtb2RlbHMgfSkgPT4ge1xyXG4gICAgICBjb25zdCBpZCA9IHV1aWR2NCgpO1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0ge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgdXNlcklkOiBtZS5pZCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIG1vZGVscy5tZXNzYWdlc1tpZF0gPSBtZXNzYWdlO1xyXG4gICAgICBtb2RlbHMudXNlcnNbbWUuaWRdLm1lc3NhZ2VJZHMucHVzaChpZCk7XHJcblxyXG4gICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVsZXRlTWVzc2FnZTogKHBhcmVudCwgeyBpZCB9LCB7IG1vZGVscyB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgW2lkXTogbWVzc2FnZSwgLi4ub3RoZXJNZXNzYWdlcyB9ID0gbW9kZWxzLm1lc3NhZ2VzO1xyXG5cclxuICAgICAgaWYgKCFtZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtb2RlbHMubWVzc2FnZXMgPSBvdGhlck1lc3NhZ2VzO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIE1lc3NhZ2U6IHtcclxuICAgIHVzZXI6IChtZXNzYWdlLCBhcmdzLCB7IG1vZGVscyB9KSA9PiB7XHJcbiAgICAgIHJldHVybiBtb2RlbHMudXNlcnNbbWVzc2FnZS51c2VySWRdO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgUXVlcnk6IHtcclxuICAgIHVzZXJzOiAocGFyZW50LCBhcmdzLCB7IG1vZGVscyB9KSA9PiB7XHJcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKG1vZGVscy51c2Vycyk7XHJcbiAgICB9LFxyXG4gICAgdXNlcjogKHBhcmVudCwgeyBpZCB9LCB7IG1vZGVscyB9KSA9PiB7XHJcbiAgICAgIHJldHVybiBtb2RlbHMudXNlcnNbaWRdO1xyXG4gICAgfSxcclxuICAgIG1lOiAocGFyZW50LCBhcmdzLCB7IG1lIH0pID0+IHtcclxuICAgICAgcmV0dXJuIG1lO1xyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBVc2VyOiB7XHJcbiAgICBtZXNzYWdlczogKHVzZXIsIGFyZ3MsIHsgbW9kZWxzIH0pID0+IHtcclxuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMobW9kZWxzLm1lc3NhZ2VzKS5maWx0ZXIoXHJcbiAgICAgICAgbWVzc2FnZSA9PiBtZXNzYWdlLnVzZXJJZCA9PT0gdXNlci5pZCxcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==