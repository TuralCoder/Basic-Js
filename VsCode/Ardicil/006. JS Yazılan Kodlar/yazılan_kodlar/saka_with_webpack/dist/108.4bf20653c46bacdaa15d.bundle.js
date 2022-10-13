(self["webpackChunkwebpack_dersleri"] = self["webpackChunkwebpack_dersleri"] || []).push([[108],{

/***/ 108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resimGetir": () => /* binding */ resimGetir
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import axios from 'axios';
var getAxios = () => __webpack_require__.e(/* import() */ 669).then(__webpack_require__.t.bind(__webpack_require__, 669, 7));

class UnsplashApi {
  constructor() {
    this.baseURL = 'https://api.unsplash.com';
    this.clientID = 'Client-ID KjrGzPl6zZEh_ObgPJx0AYb5iRLXMCW04VqVCnIzBqc';
    this.axiosNesne = axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: this.clientID
      },
      params: {
        query: 'animal',
        count: 1
      }
    });
    getAxios().then(axiosModule => {
      console.log(axiosModule);
      console.log(axiosModule.default());
    });
  }

  randomResimGetir() {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        var resimResponse = yield _this.axiosNesne.get('/photos/random');
        console.log(resimResponse.data[0].urls.regular);
        return resimResponse.data[0].urls.regular;
      } catch (err) {
        console.log(err.response);
        return 'https://www.wpblog.com/wp-content/uploads/2018/02/4-580x318-1280x720.jpg';
      }
    })();
  }

}

function resimGetir() {
  var getirilenResim = new UnsplashApi().randomResimGetir();
  return getirilenResim;
}

/***/ })

}]);