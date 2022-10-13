(self["webpackChunkwebpack_dersleri"] = self["webpackChunkwebpack_dersleri"] || []).push([[894],{

/***/ 894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sakaGetir": () => /* binding */ sakaGetir
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



class JokeApi {
  constructor() {
    this.baseURL = 'https://api.chucknorris.io';
    this.axiosNesne = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
      baseURL: this.baseURL
    });
  }

  randomSakaGetir() {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        var sakaResponse = yield _this.axiosNesne.get('/jokes/random');
        console.log(sakaResponse.data.value);
        return sakaResponse.data.value;
      } catch (hata) {
        console.log(hata.response);
      }
    })();
  }

}

function sakaGetir() {
  var getirilenSaka = new JokeApi().randomSakaGetir();
  return getirilenSaka;
}

/***/ })

}]);