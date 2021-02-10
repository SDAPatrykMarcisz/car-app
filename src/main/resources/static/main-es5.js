(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n  <div class=\"logo\">e-<span style=\"color: #FFD500\">W</span>arsztat</div>\n  <div class=\"navbar-nav\">\n    <div class=\"round-button\">{{getInitials()}}</div>\n    <div class=\"userInfo\">\n      <div class=\"name\">{{getName()}}</div>\n      <div class=\"position\">{{currentUser.position}}</div>\n      <div class=\"login\" (click)=\"logout()\"> Wyloguj</div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"full-size-container\">\n  <router-outlet></router-outlet>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/editTask/edit-task.component.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editTask/edit-task.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppEditTaskEditTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"close-line\">\r\n  <div class=\"round-button plus\" (click)=\"close()\">X</div>\r\n</div>\r\n<div class=\"add-task\">\r\n  <div class=\"add-task-header\">\r\n  </div>\r\n  <div>\r\n    <div class=\"add-task-data\">\r\n      <div class=\"user-info\">\r\n        <div class=\"subheader\">Dane klienta</div>\r\n        <i class=\"fa fa-search\" (click)=\"openUserSearch()\"></i>\r\n        <form [formGroup]=\"userDataForm\">\r\n          <div class=\"form-group\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" formControlName=\"firstName\" class=\"login-form-input\" placeholder=\"Imie\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && userForm.firstName.errors }\">\r\n            </div>\r\n            <input type=\"text\" formControlName=\"lastName\" class=\"login-form-input\" placeholder=\"Nazwisko\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && userForm.lastName.errors }\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" formControlName=\"personalId\" class=\"login-form-input\" placeholder=\"PESEL\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && userForm.personalId.errors }\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" formControlName=\"phoneNumber\" class=\"login-form-input\" placeholder=\"Telefon komórkowy\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && userForm.phoneNumber.errors }\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"car-info\">\r\n        <div class=\"subheader\">Dane samochodu</div>\r\n        <i class=\"fa fa-search\" (click)=\"openCarSearch()\"></i>\r\n        <form [formGroup]=\"carDataForm\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" formControlName=\"registerNumber\" class=\"login-form-input\"\r\n                   placeholder=\"Numer rejestracyjny\" [ngClass]=\"{ 'is-invalid': submitted && carForm.registerNumber.errors }\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" formControlName=\"mark\" class=\"login-form-input\"\r\n                   placeholder=\"Marka\" [ngClass]=\"{ 'is-invalid': submitted && carForm.mark.errors }\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" formControlName=\"model\" class=\"login-form-input\"\r\n                   placeholder=\"Model\" [ngClass]=\"{ 'is-invalid': submitted && carForm.model.errors }\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" formControlName=\"vinNumber\" class=\"login-form-input\"\r\n                   placeholder=\"Numer VIN\" [ngClass]=\"{ 'is-invalid': submitted && carForm.vinNumber.errors }\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"add-task-description\">\r\n      <div class=\"task-info\">\r\n        <div class=\"subheader\">Wywiad - opis zlecenia / problemu</div>\r\n        <form [formGroup]=\"interviewForm\">\r\n          <textarea type=\"text\" formControlName=\"interviewTaskDescription\" class=\"login-form-input\"\r\n                    placeholder=\"Klient zgłasza potrzebę...\"></textarea>\r\n        </form>\r\n      </div>\r\n      <div class=\"description\">\r\n        <form [formGroup]=\"descriptionForm\">\r\n          <div class=\"subheader\">Opis wykonanych zadań</div>\r\n          <textarea type=\"text\" formControlName=\"taskDoneDescription\" class=\"login-form-input\"\r\n                    placeholder=\"Zostało wykonane...\"></textarea>\r\n        </form>\r\n      </div>\r\n      <div class=\"state\">\r\n        <form #statusForm=\"ngForm\" (change)=\"setStatus(statusForm.value)\">\r\n          <span class=\"subheader\" [ngClass]=\"{ 'is-invalid': submitted && !statusSelected }\">Status: </span>\r\n          <div class=\"radio-input\" *ngFor=\"let status of taskStatuses\">\r\n            <input type=\"radio\" id=\"{{status}}\" name=\"status\" value=\"{{status}}\" ngModel\r\n                   [checked]=\"status == statusSelected\">\r\n            <label for=\"{{status}}\">\r\n              {{status | ConvertStatusPipe}}\r\n            </label>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <button (click)=\"save()\" [disabled]=\"loading\">Zapisz</button>\r\n      <button (click)=\"delete()\" [disabled]=\"!taskToEdit?.id\">Usuń</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"round-button plus\" (click)=\"addTaskModal()\">+</div>\n<task-list\n  [data]=\"tasks\"\n  [filterByStatus]=\"'NEW'\"\n  [label]=\"'nowe'\"\n  [withHeader]=\"true\"\n  (dataEdited)=\"reloadTasks()\"\n></task-list>\n<div class=\"break\"></div>\n<task-list\n  [data]=\"tasks\"\n  [filterByStatus]=\"'IN_PROGRESS'\"\n  [label]=\"'w trakcie'\"\n  (dataEdited)=\"reloadTasks()\"\n></task-list>\n<div class=\"break\"></div>\n<task-list\n  [data]=\"tasks\"\n  [filterByStatus]=\"'FINISHED'\"\n  [label]=\"'zakończone'\"\n  (dataEdited)=\"reloadTasks()\"\n></task-list>\n<div class=\"break\"></div>\n<task-list\n  [data]=\"tasks\"\n  [filterByStatus]=\"'INTERRUPTED'\"\n  [label]=\"'wstrzymane'\"\n  (dataEdited)=\"reloadTasks()\"\n></task-list>\n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/loading-indicator/loading-indicator.component.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loading-indicator/loading-indicator.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoadingIndicatorLoadingIndicatorComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"loading\" *ngIf=\"isLoading\">\n  <div class=\"loading-indicator\">Ładowanie...</div>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"login-form-wrapper\">\n  <div class=\"login-form\">\n    <div class=\"login-form-header\">e-<span style=\"color: #FFD500\">W</span>arsztat</div>\n    <div class=\"login-form-content\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"username\" class=\"login-form-label\">Login</label>\n          <input type=\"text\" formControlName=\"username\" class=\"login-form-input\"\n                 [ngClass]=\"{ 'is-invalid': submitted && form.username.errors }\"/>\n          <div *ngIf=\"submitted && form.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"form.username.errors.required\">Login jest wymagany</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\" class=\"login-form-label\">Hasło</label>\n          <input type=\"password\" formControlName=\"password\" class=\"login-form-input\"\n                 [ngClass]=\"{ 'is-invalid': submitted && form.password.errors }\"/>\n          <div *ngIf=\"submitted && form.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"form.password.errors.required\">Hasło jest wymagane</div>\n          </div>\n        </div>\n        <button [disabled]=\"loading\" class=\"btn btn-primary login-button\">\n          <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n          Zaloguj\n        </button>\n        <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n      </form>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search-car/search-car.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search-car/search-car.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSearchSearchCarSearchCarComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"close-line\">\r\n  <div class=\"round-button plus\" (click)=\"close()\">X</div>\r\n</div>\r\n<div class=\"search-car\">\r\n      <div class=\"search-input\">\r\n        <form [formGroup]=\"searchForm\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" formControlName=\"searchInput\" class=\"login-form-input\" placeholder=\"kryteria wyszukiwania...\" (keyup)=\"search($event.target.value)\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n  <div class=\"search-results\" *ngIf=\"searchResults\">\r\n    <div *ngFor=\"let car of searchResults\" (click)=\"selectCar(car)\">{{car.mark}} {{car.model}} {{car.registerNumber}}</div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search-user/search-user.component.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search-user/search-user.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSearchSearchUserSearchUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"close-line\">\r\n  <div class=\"round-button plus\" (click)=\"close()\">X</div>\r\n</div>\r\n<div class=\"search-car\">\r\n  <div class=\"search-input\">\r\n    <form [formGroup]=\"searchForm\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" formControlName=\"searchInput\" class=\"login-form-input\" placeholder=\"kryteria wyszukiwania...\" (keyup)=\"search($event.target.value)\">\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"search-results\" *ngIf=\"searchResults\">\r\n    <div *ngFor=\"let client of searchResults\" (click)=\"selectClient(client)\">{{client.firstName}} {{client.lastName}} {{client.personalId}} {{client.contact?.phoneNumber}}</div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/taskList/task-list.component.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/taskList/task-list.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTaskListTaskListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"table-wrapper\">\n<table class=\"tasks\" *ngIf=\"tasks\">\n  <colgroup>\n    <col style=\"width: 10%\">\n    <col *ngFor=\"let i of[].constructor(5)\">\n  </colgroup>\n\n  <tr class=\"header\" *ngIf=\"withHeader\">\n    <th></th>\n    <th>marka/model</th>\n    <th>nr.rejestracji</th>\n    <th>mechanik</th>\n    <th>klient</th>\n<!--    <th>status</th>-->\n    <th></th>\n  </tr>\n\n  <tr *ngFor=\"let task of tasks; let first=first\">\n    <td *ngIf=\"first\"><div>{{label}}</div></td>\n    <td *ngIf=\"!first\"><div></div></td>\n    <td><div>{{task.car?.mark}} {{task.car?.model}}</div></td>\n    <td><div>{{task.car?.registerNumber}}</div></td>\n    <td><div>{{task.mechanic?.personDetails?.firstName + ' ' + task.mechanic?.personDetails?.lastName}}</div></td>\n    <td><div>{{task.client?.firstName + ' ' + task.client?.lastName}}</div></td>\n<!--    <td><div>{{task.status | ConvertStatusPipe}}</div></td>-->\n    <td><div class=\"lastRow\"><button class=\"edit-button\" (click)=\"editTask(task)\">Edytuj</button></div></td>\n  </tr>\n</table>\n</div>\n";
      /***/
    },

    /***/
    "./src/app/_helpers/auth.guard.ts":
    /*!****************************************!*\
      !*** ./src/app/_helpers/auth.guard.ts ***!
      \****************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcApp_helpersAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/_services */
      "./src/app/_services/index.ts");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authenticationService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var currentUser = this.authenticationService.currentUserValue;

            if (currentUser) {
              return true; // logged in so return true
            } // not logged in so redirect to login page with the return url


            this.router.navigate(['/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], AuthGuard);
      /***/
    },

    /***/
    "./src/app/_helpers/basic-auth.interceptor.ts":
    /*!****************************************************!*\
      !*** ./src/app/_helpers/basic-auth.interceptor.ts ***!
      \****************************************************/

    /*! exports provided: BasicAuthInterceptor */

    /***/
    function srcApp_helpersBasicAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function () {
        return BasicAuthInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/_services */
      "./src/app/_services/index.ts");

      var BasicAuthInterceptor = /*#__PURE__*/function () {
        function BasicAuthInterceptor(authenticationService) {
          _classCallCheck(this, BasicAuthInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(BasicAuthInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // add authorization header with basic auth credentials if available
            var currentUser = this.authenticationService.currentUserValue;

            if (currentUser && currentUser.authdata) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Basic ".concat(currentUser.authdata)
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return BasicAuthInterceptor;
      }();

      BasicAuthInterceptor.ctorParameters = function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      };

      BasicAuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], BasicAuthInterceptor);
      /***/
    },

    /***/
    "./src/app/_helpers/error.interceptor.ts":
    /*!***********************************************!*\
      !*** ./src/app/_helpers/error.interceptor.ts ***!
      \***********************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function srcApp_helpersErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/_services */
      "./src/app/_services/index.ts");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(authenticationService) {
          _classCallCheck(this, ErrorInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();

                location.reload(true);
              }

              console.log(err);
              var error = err.error.message || err.statusText;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ctorParameters = function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }];
      };

      ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])], ErrorInterceptor);
      /***/
    },

    /***/
    "./src/app/_helpers/index.ts":
    /*!***********************************!*\
      !*** ./src/app/_helpers/index.ts ***!
      \***********************************/

    /*! exports provided: AuthGuard, BasicAuthInterceptor, ErrorInterceptor */

    /***/
    function srcApp_helpersIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.guard */
      "./src/app/_helpers/auth.guard.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
      });
      /* harmony import */


      var _basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./basic-auth.interceptor */
      "./src/app/_helpers/basic-auth.interceptor.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function () {
        return _basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__["BasicAuthInterceptor"];
      });
      /* harmony import */


      var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./error.interceptor */
      "./src/app/_helpers/error.interceptor.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return _error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"];
      });
      /***/

    },

    /***/
    "./src/app/_models/task/task-status.ts":
    /*!*********************************************!*\
      !*** ./src/app/_models/task/task-status.ts ***!
      \*********************************************/

    /*! exports provided: TaskStatuses */

    /***/
    function srcApp_modelsTaskTaskStatusTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskStatuses", function () {
        return TaskStatuses;
      });

      var TaskStatuses = ["NEW", "IN_PROGRESS", "FINISHED", "INTERRUPTED"];
      /***/
    },

    /***/
    "./src/app/_services/authentication.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/_services/authentication.service.ts ***!
      \*****************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function srcApp_servicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @environments/environment */
      "./src/environments/environment.ts");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(http) {
          _classCallCheck(this, AuthenticationService);

          this.http = http;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(AuthenticationService, [{
          key: "login",
          value: function login(username, password) {
            var _this2 = this;

            var headers = {
              authorization: "Basic " + btoa(username + ":" + password)
            };
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/authenticate"), null, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
              // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
              user.authdata = window.btoa(username + ':' + password);
              localStorage.setItem('currentUser', JSON.stringify(user));

              _this2.currentUserSubject.next(user);

              return user;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
          }
        }, {
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AuthenticationService);
      /***/
    },

    /***/
    "./src/app/_services/car.service.ts":
    /*!******************************************!*\
      !*** ./src/app/_services/car.service.ts ***!
      \******************************************/

    /*! exports provided: CarService */

    /***/
    function srcApp_servicesCarServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarService", function () {
        return CarService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @environments/environment */
      "./src/environments/environment.ts");

      var CarService = /*#__PURE__*/function () {
        function CarService(http) {
          _classCallCheck(this, CarService);

          this.http = http;
        }

        _createClass(CarService, [{
          key: "search",
          value: function search(searchParams) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/cars?search=").concat(searchParams));
          }
        }]);

        return CarService;
      }();

      CarService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      CarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CarService);
      /***/
    },

    /***/
    "./src/app/_services/client.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/_services/client.service.ts ***!
      \*********************************************/

    /*! exports provided: ClientService */

    /***/
    function srcApp_servicesClientServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientService", function () {
        return ClientService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @environments/environment */
      "./src/environments/environment.ts");

      var ClientService = /*#__PURE__*/function () {
        function ClientService(http) {
          _classCallCheck(this, ClientService);

          this.http = http;
        }

        _createClass(ClientService, [{
          key: "search",
          value: function search(searchParams) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/clients?search=").concat(searchParams));
          }
        }]);

        return ClientService;
      }();

      ClientService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ClientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ClientService);
      /***/
    },

    /***/
    "./src/app/_services/index.ts":
    /*!************************************!*\
      !*** ./src/app/_services/index.ts ***!
      \************************************/

    /*! exports provided: AuthenticationService, UserService */

    /***/
    function srcApp_servicesIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./authentication.service */
      "./src/app/_services/authentication.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"];
      });
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user.service */
      "./src/app/_services/user.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"];
      });
      /***/

    },

    /***/
    "./src/app/_services/task.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/_services/task.service.ts ***!
      \*******************************************/

    /*! exports provided: TaskService */

    /***/
    function srcApp_servicesTaskServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskService", function () {
        return TaskService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @environments/environment */
      "./src/environments/environment.ts");

      var TaskService = /*#__PURE__*/function () {
        function TaskService(http) {
          _classCallCheck(this, TaskService);

          this.http = http;
        }

        _createClass(TaskService, [{
          key: "getAll",
          value: function getAll() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/tasks"));
          }
        }, {
          key: "addNew",
          value: function addNew(newTask) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/tasks"), newTask);
          }
        }, {
          key: "update",
          value: function update(task) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/tasks/").concat(task.id), task);
          }
        }, {
          key: "delete",
          value: function _delete(taskId) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/tasks/").concat(taskId));
          }
        }]);

        return TaskService;
      }();

      TaskService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      TaskService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], TaskService);
      /***/
    },

    /***/
    "./src/app/_services/user.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/_services/user.service.ts ***!
      \*******************************************/

    /*! exports provided: UserService */

    /***/
    function srcApp_servicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @environments/environment */
      "./src/environments/environment.ts");

      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
        }

        _createClass(UserService, [{
          key: "getAll",
          value: function getAll() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/users"));
          }
        }]);

        return UserService;
      }();

      UserService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], UserService);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo {\n  font-family: Segoe UI;\n  font-size: 50px;\n  font-weight: 300;\n  color: white;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  height: 125px;\n}\n\n.userInfo {\n  margin-left: 20px;\n}\n\n.userInfo .name {\n  color: white;\n  font-size: 20px;\n  font-weight: 300;\n}\n\n.userInfo .position {\n  color: white;\n  font-size: 21px;\n}\n\n.userInfo .login {\n  color: white;\n  font-size: 18px;\n}\n\n.round-button {\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-top: 5%;\n  width: 60px;\n  height: 60px;\n  color: black;\n  background-color: white;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 56px;\n  border-radius: 50%;\n  font-size: 33px;\n}\n\n.round-button.plus {\n  background-color: #FFD500;\n  font-size: 50px;\n  font-weight: 300er;\n  line-height: 100%;\n}\n\n.full-size-container {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBQUo7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRkY7O0FBSUU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRko7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUpGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gIGZvbnQtZmFtaWx5OiBTZWdvZSBVSTtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGhlaWdodDogMTI1cHg7XHJcbn1cclxuXHJcbi51c2VySW5mbyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgLm5hbWUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcblxyXG4gIC5wb3NpdGlvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgfVxyXG5cclxuICAubG9naW4ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5yb3VuZC1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBsaW5lLWhlaWdodDogNTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZm9udC1zaXplOiAzM3B4O1xyXG5cclxuICAmLnBsdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDUwMDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDBlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5mdWxsLXNpemUtY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvL2JhY2tncm91bmQtY29sb3I6ICNFQ0VDRUI7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./_services */
      "./src/app/_services/index.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, authenticationService) {
          var _this3 = this;

          _classCallCheck(this, AppComponent);

          this.router = router;
          this.authenticationService = authenticationService;
          this.authenticationService.currentUser.subscribe(function (x) {
            return _this3.currentUser = x;
          });
        }

        _createClass(AppComponent, [{
          key: "logout",
          value: function logout() {
            this.authenticationService.logout();
            this.router.navigate(['/login']);
          }
        }, {
          key: "getInitials",
          value: function getInitials() {
            return this.currentUser.personDetails.firstName.charAt(0) + this.currentUser.personDetails.lastName.charAt(0);
          }
        }, {
          key: "getName",
          value: function getName() {
            return this.currentUser.personDetails.firstName + " " + this.currentUser.personDetails.lastName;
          }
        }, {
          key: "getPosition",
          value: function getPosition() {
            return this.currentUser.position;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.routing */
      "./src/app/app.routing.ts");
      /* harmony import */


      var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./_helpers */
      "./src/app/_helpers/index.ts");
      /* harmony import */


      var _home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./home */
      "./src/app/home/index.ts");
      /* harmony import */


      var _login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./login */
      "./src/app/login/index.ts");
      /* harmony import */


      var _taskList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./taskList */
      "./src/app/taskList/index.ts");
      /* harmony import */


      var _app_editTask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @app/editTask */
      "./src/app/editTask/index.ts");
      /* harmony import */


      var _app_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @app/pipes/status.pipe */
      "./src/app/pipes/status.pipe.ts");
      /* harmony import */


      var _app_loading_indicator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @app/loading-indicator */
      "./src/app/loading-indicator/index.ts");
      /* harmony import */


      var _app_search_search_car_search_car_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @app/search/search-car/search-car.component */
      "./src/app/search/search-car/search-car.component.ts");
      /* harmony import */


      var _app_search_search_user_search_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @app/search/search-user/search-user.component */
      "./src/app/search/search-user/search-user.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing__WEBPACK_IMPORTED_MODULE_6__["appRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _app_editTask__WEBPACK_IMPORTED_MODULE_11__["EditTaskComponent"], _home__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _login__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _app_search_search_car_search_car_component__WEBPACK_IMPORTED_MODULE_14__["SearchCarComponent"], _app_search_search_user_search_user_component__WEBPACK_IMPORTED_MODULE_15__["SearchUserComponent"], _app_loading_indicator__WEBPACK_IMPORTED_MODULE_13__["LoadingIndicatorComponent"], _taskList__WEBPACK_IMPORTED_MODULE_10__["TaskListComponent"], _app_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_12__["ConvertStatusPipe"]],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
          useClass: _helpers__WEBPACK_IMPORTED_MODULE_7__["BasicAuthInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
          useClass: _helpers__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/app.routing.ts":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: appRoutingModule */

    /***/
    function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "appRoutingModule", function () {
        return appRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home */
      "./src/app/home/index.ts");
      /* harmony import */


      var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login */
      "./src/app/login/index.ts");
      /* harmony import */


      var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./_helpers */
      "./src/app/_helpers/index.ts");

      var routes = [{
        path: '',
        component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'login',
        component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, // otherwise redirect to home
      {
        path: '**',
        redirectTo: ''
      }];

      var appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);
      /***/

    },

    /***/
    "./src/app/editTask/edit-task.component.scss":
    /*!***************************************************!*\
      !*** ./src/app/editTask/edit-task.component.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppEditTaskEditTaskComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".add-task .add-task-header {\n  display: flex;\n}\n.add-task .add-task-header .close-button {\n  flex-direction: row;\n}\n.add-task .subheader {\n  font-size: 16px;\n  font-weight: 500;\n  height: 43px;\n  display: inline-block;\n  margin-right: 10px;\n}\n.add-task .user-info {\n  margin-bottom: 19px;\n}\n.add-task .add-task-data {\n  padding-left: 65px;\n  width: 30%;\n  display: inline-block;\n  vertical-align: top;\n}\n.add-task .add-task-data .form-group .login-form-input {\n  border-style: solid;\n  border-left: none;\n  border-top: none;\n  border-right: none;\n  border-bottom-width: 0.5pt;\n  border-bottom-color: #707070;\n}\n.add-task .add-task-data .form-group .is-invalid {\n  border-color: red;\n  color: red;\n}\n.add-task .add-task-description {\n  width: 70%;\n  display: inline-block;\n  vertical-align: top;\n}\n.add-task .add-task-description .task-info, .add-task .add-task-description .description {\n  padding-right: 60px;\n  margin-bottom: 33px;\n}\n.add-task .add-task-description .task-info textarea, .add-task .add-task-description .description textarea {\n  width: 100%;\n  height: 120px;\n  resize: none;\n}\n.add-task .add-task-description .state .radio-input {\n  display: inline-block;\n  margin: auto 10px;\n}\n.add-task .add-task-description .state .radio-input input {\n  margin-right: 5px;\n}\n.add-task .add-task-description .state .is-invalid {\n  border-color: red;\n  color: red;\n}\n.add-task .add-task-description button {\n  margin: 20px 30px;\n  float: right;\n  font-family: \"Segoe UI\";\n  font-size: 15px;\n  font-weight: 300;\n  color: black;\n  background-color: #FFD500;\n  border-radius: 24px;\n  width: 120px;\n}\n.close-line {\n  width: 100%;\n}\n.close-line .round-button.plus {\n  margin: 15px 15px 15px 95%;\n  width: 30px;\n  height: 30px;\n  color: black;\n  text-align: center;\n  vertical-align: middle;\n  border-radius: 50%;\n  background-color: #FFD500;\n  font-size: 25px;\n  font-weight: 300;\n  line-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdFRhc2svZWRpdC10YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtBQUFKO0FBRUk7RUFDRSxtQkFBQTtBQUFOO0FBS0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUhKO0FBTUU7RUFDRSxtQkFBQTtBQUpKO0FBT0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBTEo7QUFRTTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQU5SO0FBUU07RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFOUjtBQVlFO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFWSjtBQVlJO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQVZOO0FBWU07RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFWUjtBQWdCTTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUFkUjtBQWdCUTtFQUNFLGlCQUFBO0FBZFY7QUFpQk07RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFmUjtBQW9CSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBbEJOO0FBdUJBO0VBQ0UsV0FBQTtBQXBCRjtBQXFCRTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQW5CSiIsImZpbGUiOiJzcmMvYXBwL2VkaXRUYXNrL2VkaXQtdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtdGFzayB7XHJcbiAgLmFkZC10YXNrLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5jbG9zZS1idXR0b24ge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC5zdWJoZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGhlaWdodDogNDNweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC51c2VyLWluZm8ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTlweDtcclxuICB9XHJcblxyXG4gIC5hZGQtdGFzay1kYXRhIHtcclxuICAgIHBhZGRpbmctbGVmdDogNjVweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG5cclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgLmxvZ2luLWZvcm0taW5wdXQge1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC41cHQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzcwNzA3MDtcclxuICAgICAgfVxyXG4gICAgICAuaXMtaW52YWxpZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC5hZGQtdGFzay1kZXNjcmlwdGlvbiB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuXHJcbiAgICAudGFzay1pbmZvLCAuZGVzY3JpcHRpb24ge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzM3B4O1xyXG5cclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5zdGF0ZSB7XHJcbiAgICAgIC5yYWRpby1pbnB1dCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAxMHB4O1xyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmlzLWludmFsaWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAyMHB4IDMwcHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIjtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQ1MDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jbG9zZS1saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAucm91bmQtYnV0dG9uLnBsdXMge1xyXG4gICAgbWFyZ2luOiAxNXB4IDE1cHggMTVweCA5NSU7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZENTAwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG5cclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/editTask/edit-task.component.ts":
    /*!*************************************************!*\
      !*** ./src/app/editTask/edit-task.component.ts ***!
      \*************************************************/

    /*! exports provided: EditTaskComponent */

    /***/
    function srcAppEditTaskEditTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function () {
        return EditTaskComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_models_task_task_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/_models/task/task-status */
      "./src/app/_models/task/task-status.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @app/_services */
      "./src/app/_services/index.ts");
      /* harmony import */


      var _app_search_search_car_search_car_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @app/search/search-car/search-car.component */
      "./src/app/search/search-car/search-car.component.ts");
      /* harmony import */


      var _app_search_search_user_search_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @app/search/search-user/search-user.component */
      "./src/app/search/search-user/search-user.component.ts");

      var EditTaskComponent = /*#__PURE__*/function () {
        function EditTaskComponent(modal, modalService, formBuilder, authService) {
          _classCallCheck(this, EditTaskComponent);

          this.modal = modal;
          this.modalService = modalService;
          this.formBuilder = formBuilder;
          this.authService = authService;
          this.taskToEdit = null;
          this.taskStatuses = _app_models_task_task_status__WEBPACK_IMPORTED_MODULE_4__["TaskStatuses"];
          this.loading = true;
        }

        _createClass(EditTaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loading = true;
            this.initForms();
            this.loading = false;
          }
        }, {
          key: "loadTaskToEdit",
          value: function loadTaskToEdit(task) {
            var _this4 = this;

            console.log(task);
            this.loading = true;
            var checking = true;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(100).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeWhile"])(function () {
              return checking;
            })).subscribe(function (_) {
              if (_this4.carDataForm) {
                _this4.taskToEdit = task;

                _this4.fillUsingExistingTask(task);

                checking = false;
                _this4.loading = false;
              }
            });
          }
        }, {
          key: "openCarSearch",
          value: function openCarSearch() {
            var _this5 = this;

            var ngbModalRef = this.getSearchModal(_app_search_search_car_search_car_component__WEBPACK_IMPORTED_MODULE_8__["SearchCarComponent"]);
            ngbModalRef.result.then(function (car) {
              _this5.updateCarDataForm(car);
            });
          }
        }, {
          key: "openUserSearch",
          value: function openUserSearch() {
            var _this6 = this;

            var ngbModalRef = this.getSearchModal(_app_search_search_user_search_user_component__WEBPACK_IMPORTED_MODULE_9__["SearchUserComponent"]);
            ngbModalRef.result.then(function (user) {
              _this6.updateUserDataForm(user);
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.modal.close();
          }
        }, {
          key: "isAnyFormInvalid",
          value: function isAnyFormInvalid() {
            return this.userDataForm.invalid || this.carDataForm.invalid || this.interviewForm.invalid || this.descriptionForm.invalid || !this.statusSelected;
          }
        }, {
          key: "save",
          value: function save() {
            this.submitted = true;

            if (this.isAnyFormInvalid()) {
              console.log("i znowu...");
              return;
            }

            console.log("poszli dalej");
            var requestBody = {
              id: this.taskToEdit ? this.taskToEdit.id : null,
              status: this.statusSelected,
              mechanic: this.authService.currentUserValue,
              client: {
                id: parseInt(this.userDataForm.get("id").value),
                firstName: this.userDataForm.get("firstName").value,
                lastName: this.userDataForm.get("lastName").value,
                personalId: this.userDataForm.get("personalId").value,
                contact: {
                  phoneNumber: this.userDataForm.get("phoneNumber").value
                }
              },
              car: {
                id: parseInt(this.carDataForm.get("id").value),
                registerNumber: this.carDataForm.get("registerNumber").value,
                model: this.carDataForm.get("model").value,
                mark: this.carDataForm.get("mark").value
              },
              taskInterview: this.interviewForm.get("interviewTaskDescription").value,
              taskDoneDescription: this.descriptionForm.get("taskDoneDescription").value
            };
            console.log(requestBody);
            this.modal.close({
              operation: 'createOrUpdate',
              data: requestBody
            });
          }
        }, {
          key: "delete",
          value: function _delete() {
            this.modal.close({
              operation: 'delete',
              data: this.taskToEdit.id
            });
          }
        }, {
          key: "fillUsingExistingTask",
          value: function fillUsingExistingTask(task) {
            this.updateCarDataForm(task.car);
            this.updateUserDataForm(task.client);
            this.statusSelected = task.status;
            this.interviewForm.get("interviewTaskDescription").setValue(task.taskInterview);
            this.descriptionForm.get("taskDoneDescription").setValue(task.taskDoneDescription);
          }
        }, {
          key: "updateCarDataForm",
          value: function updateCarDataForm(car) {
            this.carDataForm.get("registerNumber").setValue(car === null || car === void 0 ? void 0 : car.registerNumber);
            this.carDataForm.get("model").setValue(car === null || car === void 0 ? void 0 : car.model);
            this.carDataForm.get("mark").setValue(car === null || car === void 0 ? void 0 : car.mark);
          }
        }, {
          key: "updateUserDataForm",
          value: function updateUserDataForm(client) {
            var _a;

            this.userDataForm.get("id").setValue(client === null || client === void 0 ? void 0 : client.id);
            this.userDataForm.get("firstName").setValue(client === null || client === void 0 ? void 0 : client.firstName);
            this.userDataForm.get("lastName").setValue(client === null || client === void 0 ? void 0 : client.lastName);
            this.userDataForm.get("personalId").setValue(client === null || client === void 0 ? void 0 : client.personalId);
            this.userDataForm.get("phoneNumber").setValue((_a = client === null || client === void 0 ? void 0 : client.contact) === null || _a === void 0 ? void 0 : _a.phoneNumber);
          }
        }, {
          key: "initForms",
          value: function initForms() {
            this.userDataForm = this.formBuilder.group({
              id: '',
              firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              personalId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
            this.carDataForm = this.formBuilder.group({
              id: '',
              registerNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              mark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              vinNumber: ''
            });
            this.interviewForm = this.formBuilder.group({
              interviewTaskDescription: ''
            });
            this.descriptionForm = this.formBuilder.group({
              taskDoneDescription: ''
            });
            this.statusForm = this.formBuilder.group({
              status: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
          }
        }, {
          key: "getSearchModal",
          value: function getSearchModal(component) {
            var ngbModalRef = this.modalService.open(component, {
              windowClass: 'add-task-window',
              backdrop: 'static',
              keyboard: false,
              centered: true,
              size: "lg"
            });
            return ngbModalRef;
          }
        }, {
          key: "setStatus",
          value: function setStatus(value) {
            this.statusSelected = value.status;
          }
        }, {
          key: "userForm",
          get: function get() {
            return this.userDataForm.controls;
          }
        }, {
          key: "carForm",
          get: function get() {
            return this.carDataForm.controls;
          }
        }]);

        return EditTaskComponent;
      }();

      EditTaskComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
        }];
      };

      EditTaskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-task',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit-task.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/editTask/edit-task.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./edit-task.component.scss */
        "./src/app/editTask/edit-task.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])], EditTaskComponent);
      /***/
    },

    /***/
    "./src/app/editTask/index.ts":
    /*!***********************************!*\
      !*** ./src/app/editTask/index.ts ***!
      \***********************************/

    /*! exports provided: EditTaskComponent */

    /***/
    function srcAppEditTaskIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _edit_task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-task.component */
      "./src/app/editTask/edit-task.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function () {
        return _edit_task_component__WEBPACK_IMPORTED_MODULE_0__["EditTaskComponent"];
      });
      /***/

    },

    /***/
    "./src/app/home/home.component.scss":
    /*!******************************************!*\
      !*** ./src/app/home/home.component.scss ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".break {\n  margin-bottom: 50px;\n}\n\n.round-button.plus {\n  float: right;\n  margin: 5px;\n  width: 60px;\n  height: 60px;\n  color: black;\n  text-align: center;\n  vertical-align: middle;\n  border-radius: 50%;\n  background-color: #FFD500;\n  font-size: 50px;\n  font-weight: 300 er;\n  line-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFrIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnJvdW5kLWJ1dHRvbi5wbHVzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDUwMDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogMzAwIGVyO1xuICBsaW5lLWhlaWdodDogMTAwJTtcblxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/home/home.component.ts":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/_services */
      "./src/app/_services/index.ts");
      /* harmony import */


      var _app_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/_services/task.service */
      "./src/app/_services/task.service.ts");
      /* harmony import */


      var _app_editTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/editTask */
      "./src/app/editTask/index.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(userService, taskService, modalService) {
          _classCallCheck(this, HomeComponent);

          this.userService = userService;
          this.taskService = taskService;
          this.modalService = modalService;
          this.loading = false;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            document.body.classList.add('app-colored-background');
            this.reloadTasks();
          }
        }, {
          key: "reloadTasks",
          value: function reloadTasks() {
            var _this7 = this;

            this.loading = true;
            this.taskService.getAll().subscribe(function (response) {
              _this7.loading = false;
              _this7.tasks = null;
              _this7.tasks = response.taskList;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            document.body.classList.remove('app-colored-background');
          }
        }, {
          key: "addTaskModal",
          value: function addTaskModal() {
            var _this8 = this;

            this.modalService.open(_app_editTask__WEBPACK_IMPORTED_MODULE_4__["EditTaskComponent"], {
              windowClass: 'add-task-window',
              backdrop: 'static',
              keyboard: false,
              centered: true,
              size: "xl"
            }).result.then(function (request) {
              return _this8.taskService.addNew(request.data).subscribe(function () {
                return _this8.reloadTasks();
              });
            });
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.component.scss */
        "./src/app/home/home.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"], _app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])], HomeComponent);
      /***/
    },

    /***/
    "./src/app/home/index.ts":
    /*!*******************************!*\
      !*** ./src/app/home/index.ts ***!
      \*******************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppHomeIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.component */
      "./src/app/home/home.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"];
      });
      /***/

    },

    /***/
    "./src/app/loading-indicator/index.ts":
    /*!********************************************!*\
      !*** ./src/app/loading-indicator/index.ts ***!
      \********************************************/

    /*! exports provided: LoadingIndicatorComponent */

    /***/
    function srcAppLoadingIndicatorIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _loading_indicator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./loading-indicator.component */
      "./src/app/loading-indicator/loading-indicator.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoadingIndicatorComponent", function () {
        return _loading_indicator_component__WEBPACK_IMPORTED_MODULE_0__["LoadingIndicatorComponent"];
      });
      /***/

    },

    /***/
    "./src/app/loading-indicator/loading-indicator.component.scss":
    /*!********************************************************************!*\
      !*** ./src/app/loading-indicator/loading-indicator.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoadingIndicatorLoadingIndicatorComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loading-indicator {\n  width: 88px;\n  height: 88px;\n  display: table;\n  margin: 0 auto;\n}\n.loading-indicator:before {\n  content: \" \";\n  display: block;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border-radius: 50%;\n  border: 6px solid;\n  border-color: #007bff transparent #007bff transparent;\n  -webkit-animation: loading-indicator-animation 1.2s linear infinite;\n          animation: loading-indicator-animation 1.2s linear infinite;\n}\n@-webkit-keyframes loading-indicator-animation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes loading-indicator-animation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy1pbmRpY2F0b3IvbG9hZGluZy1pbmRpY2F0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFEQUFBO0VBQ0EsbUVBQUE7VUFBQSwyREFBQTtBQUNKO0FBR0E7RUFFRTtJQUNFLHVCQUFBO0VBREY7RUFJQTtJQUNFLHlCQUFBO0VBRkY7QUFDRjtBQU5BO0VBRUU7SUFDRSx1QkFBQTtFQURGO0VBSUE7SUFDRSx5QkFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLWluZGljYXRvciB7XG4gIHdpZHRoOjg4cHg7XG4gIGhlaWdodDogODhweDtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHdpZHRoOjY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDZweCBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmYgdHJhbnNwYXJlbnQgIzAwN2JmZiB0cmFuc3BhcmVudDtcbiAgICBhbmltYXRpb246IGxvYWRpbmctaW5kaWNhdG9yLWFuaW1hdGlvbiAxLjJzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxvYWRpbmctaW5kaWNhdG9yLWFuaW1hdGlvbiB7XG5cbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxuXG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/loading-indicator/loading-indicator.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/loading-indicator/loading-indicator.component.ts ***!
      \******************************************************************/

    /*! exports provided: LoadingIndicatorComponent */

    /***/
    function srcAppLoadingIndicatorLoadingIndicatorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingIndicatorComponent", function () {
        return LoadingIndicatorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LoadingIndicatorComponent = function LoadingIndicatorComponent() {
        _classCallCheck(this, LoadingIndicatorComponent);
      };

      LoadingIndicatorComponent.propDecorators = {
        isLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      LoadingIndicatorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'loading-indicator',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./loading-indicator.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/loading-indicator/loading-indicator.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./loading-indicator.component.scss */
        "./src/app/loading-indicator/loading-indicator.component.scss"))["default"]]
      })], LoadingIndicatorComponent);
      /***/
    },

    /***/
    "./src/app/login/index.ts":
    /*!********************************!*\
      !*** ./src/app/login/index.ts ***!
      \********************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppLoginIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.component */
      "./src/app/login/login.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"];
      });
      /***/

    },

    /***/
    "./src/app/login/login.component.scss":
    /*!********************************************!*\
      !*** ./src/app/login/login.component.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login-form-wrapper {\n  width: 700px;\n  margin: auto;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 5%;\n}\n.login-form-wrapper .login-form {\n  font-family: Segoe UI;\n}\n.login-form-wrapper .login-form .login-form-header {\n  font-size: 60px;\n  font-weight: 300;\n  color: white;\n}\n.login-form-wrapper .login-form .login-form-content {\n  margin-top: 50px;\n}\n.login-form-wrapper .login-form .login-form-content .form-group {\n  margin-top: 50px;\n}\n.login-form-wrapper .login-form .login-form-content .login-form-label {\n  font-family: \"Segoe UI\";\n  font-size: 30px;\n  font-weight: 300;\n  color: white;\n}\n.login-form-wrapper .login-form .login-form-content .login-form-input {\n  width: 100%;\n  height: 77px;\n}\n.login-form-wrapper .login-form .login-form-content .login-button {\n  font-family: \"Segoe UI\";\n  font-size: 30px;\n  font-weight: 300;\n  color: black;\n  background-color: #FFD500;\n  height: 77px;\n  width: 100%;\n  margin-top: 80px;\n  border-radius: 24px;\n}\n.login-form-wrapper .login-form .login-form-content .invalid-feedback {\n  display: inline;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBQ0UscUJBQUE7QUFDSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNOO0FBRUk7RUFDRSxnQkFBQTtBQUFOO0FBRU07RUFDRSxnQkFBQTtBQUFSO0FBR007RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFEUjtBQUlNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFGUjtBQUtNO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQU1NO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFKUiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm0td3JhcHBlciB7XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHBhZGRpbmc6IDUlO1xyXG5cclxuICAubG9naW4tZm9ybSB7XHJcbiAgICBmb250LWZhbWlseTogU2Vnb2UgVUk7XHJcblxyXG4gICAgLmxvZ2luLWZvcm0taGVhZGVyIHtcclxuICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLWZvcm0tY29udGVudCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvZ2luLWZvcm0tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9naW4tZm9ybS1pbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA3N3B4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9naW4tYnV0dG9uIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZENTAwO1xyXG4gICAgICAgIGhlaWdodDogNzdweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/login/login.component.ts":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @app/_services */
      "./src/app/_services/index.ts");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, route, router, authenticationService) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.authenticationService = authenticationService;
          this.loading = false;
          this.submitted = false;
          this.error = '';

          if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']); // redirect to home if already logged in
          }
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }); // get return url from route parameters or default to '/'

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          } // convenience getter for easy access to form fields

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this9 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.loginForm.invalid) {
              return;
            }

            this.loading = true;
            this.authenticationService.login(this.form.username.value, this.form.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
              _this9.router.navigate([_this9.returnUrl]);
            }, function (error) {
              _this9.error = error;
              _this9.loading = false;
            });
          }
        }, {
          key: "form",
          get: function get() {
            return this.loginForm.controls;
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.component.scss */
        "./src/app/login/login.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])], LoginComponent);
      /***/
    },

    /***/
    "./src/app/pipes/status.pipe.ts":
    /*!**************************************!*\
      !*** ./src/app/pipes/status.pipe.ts ***!
      \**************************************/

    /*! exports provided: ConvertStatusPipe */

    /***/
    function srcAppPipesStatusPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConvertStatusPipe", function () {
        return ConvertStatusPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ConvertStatusPipe = /*#__PURE__*/function () {
        function ConvertStatusPipe() {
          _classCallCheck(this, ConvertStatusPipe);

          this.values = {
            NEW: 'nowy',
            IN_PROGRESS: 'w trakcie',
            FINISHED: 'zakończony',
            INTERRUPTED: 'wstrzymany'
          };
        }

        _createClass(ConvertStatusPipe, [{
          key: "transform",
          value: function transform(value) {
            return this.values[value];
          }
        }]);

        return ConvertStatusPipe;
      }();

      ConvertStatusPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'ConvertStatusPipe'
      })], ConvertStatusPipe);
      /***/
    },

    /***/
    "./src/app/search/search-car/search-car.component.scss":
    /*!*************************************************************!*\
      !*** ./src/app/search/search-car/search-car.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSearchSearchCarSearchCarComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".close-line {\n  width: 100%;\n}\n.close-line .round-button.plus {\n  margin: 15px 15px 15px 95%;\n  width: 30px;\n  height: 30px;\n  color: black;\n  text-align: center;\n  vertical-align: middle;\n  border-radius: 50%;\n  background-color: #FFD500;\n  font-size: 25px;\n  font-weight: 300;\n  line-height: 100%;\n}\n.form-group {\n  display: flex;\n  justify-content: center;\n}\n.login-form-label {\n  font-family: \"Segoe UI\";\n  font-size: 30px;\n  font-weight: 300;\n  color: white;\n  text-align: center;\n}\n.login-form-input {\n  width: 400px;\n  height: 77px;\n  font-size: 28px;\n}\n.search-results {\n  text-align: center;\n  font-size: 20px;\n}\n.search-results div {\n  margin: 5px auto;\n  padding: 15px;\n}\n.search-results div:hover {\n  background-color: rgba(255, 213, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC1jYXIvc2VhcmNoLWNhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjtBQUFFO0VBQ0UsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRUo7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUNGO0FBRUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUVKO0FBREk7RUFDRSx3Q0FBQTtBQUdOIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC1jYXIvc2VhcmNoLWNhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZS1saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAucm91bmQtYnV0dG9uLnBsdXMge1xyXG4gICAgbWFyZ2luOiAxNXB4IDE1cHggMTVweCA5NSU7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZENTAwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtLWxhYmVsIHtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtLWlucHV0IHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA3N3B4O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHRze1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZGl2e1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjEzLCAwLCAwLjUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/search/search-car/search-car.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/search/search-car/search-car.component.ts ***!
      \***********************************************************/

    /*! exports provided: SearchCarComponent */

    /***/
    function srcAppSearchSearchCarSearchCarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchCarComponent", function () {
        return SearchCarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_services_car_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/_services/car.service */
      "./src/app/_services/car.service.ts");

      var SearchCarComponent = /*#__PURE__*/function () {
        function SearchCarComponent(modal, formBuilder, carService) {
          _classCallCheck(this, SearchCarComponent);

          this.modal = modal;
          this.formBuilder = formBuilder;
          this.carService = carService;
        }

        _createClass(SearchCarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForms();
          }
        }, {
          key: "close",
          value: function close() {
            this.modal.close();
          }
        }, {
          key: "initForms",
          value: function initForms() {
            this.searchForm = this.formBuilder.group({
              searchInput: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
          }
        }, {
          key: "search",
          value: function search(input) {
            var _this10 = this;

            this.carService.search(input).subscribe(function (response) {
              _this10.searchResults = response.carList;
            });
            console.log(input);
          }
        }, {
          key: "selectCar",
          value: function selectCar(car) {
            this.modal.close(car);
          }
        }, {
          key: "form",
          get: function get() {
            return this.searchForm.controls;
          }
        }]);

        return SearchCarComponent;
      }();

      SearchCarComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _app_services_car_service__WEBPACK_IMPORTED_MODULE_4__["CarService"]
        }];
      };

      SearchCarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'search-car',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./search-car.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search-car/search-car.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./search-car.component.scss */
        "./src/app/search/search-car/search-car.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _app_services_car_service__WEBPACK_IMPORTED_MODULE_4__["CarService"]])], SearchCarComponent);
      /***/
    },

    /***/
    "./src/app/search/search-user/search-user.component.scss":
    /*!***************************************************************!*\
      !*** ./src/app/search/search-user/search-user.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSearchSearchUserSearchUserComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".close-line {\n  width: 100%;\n}\n.close-line .round-button.plus {\n  margin: 15px 15px 15px 95%;\n  width: 30px;\n  height: 30px;\n  color: black;\n  text-align: center;\n  vertical-align: middle;\n  border-radius: 50%;\n  background-color: #FFD500;\n  font-size: 25px;\n  font-weight: 300;\n  line-height: 100%;\n}\n.form-group {\n  display: flex;\n  justify-content: center;\n}\n.login-form-label {\n  font-family: \"Segoe UI\";\n  font-size: 30px;\n  font-weight: 300;\n  color: white;\n  text-align: center;\n}\n.login-form-input {\n  width: 400px;\n  height: 77px;\n  font-size: 28px;\n}\n.search-results {\n  text-align: center;\n  font-size: 20px;\n}\n.search-results div {\n  margin: 5px auto;\n  padding: 15px;\n}\n.search-results div:hover {\n  background-color: rgba(255, 213, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC11c2VyL3NlYXJjaC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGO0FBQUU7RUFDRSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBRUo7QUFESTtFQUNFLHdDQUFBO0FBR04iLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLXVzZXIvc2VhcmNoLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2UtbGluZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLnJvdW5kLWJ1dHRvbi5wbHVzIHtcclxuICAgIG1hcmdpbjogMTVweCAxNXB4IDE1cHggOTUlO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybS1sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybS1pbnB1dCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogNzdweDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0c3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGRpdntcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIxMywgMCwgMC41KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/search/search-user/search-user.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/search/search-user/search-user.component.ts ***!
      \*************************************************************/

    /*! exports provided: SearchUserComponent */

    /***/
    function srcAppSearchSearchUserSearchUserComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchUserComponent", function () {
        return SearchUserComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_services_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/_services/client.service */
      "./src/app/_services/client.service.ts");

      var SearchUserComponent = /*#__PURE__*/function () {
        function SearchUserComponent(modal, formBuilder, clientService) {
          _classCallCheck(this, SearchUserComponent);

          this.modal = modal;
          this.formBuilder = formBuilder;
          this.clientService = clientService;
        }

        _createClass(SearchUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForms();
          }
        }, {
          key: "close",
          value: function close() {
            this.modal.close();
          }
        }, {
          key: "initForms",
          value: function initForms() {
            this.searchForm = this.formBuilder.group({
              searchInput: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
          }
        }, {
          key: "search",
          value: function search(input) {
            var _this11 = this;

            this.clientService.search(input).subscribe(function (response) {
              _this11.searchResults = response.clientsList;
            });
          }
        }, {
          key: "selectClient",
          value: function selectClient(client) {
            this.modal.close(client);
          }
        }, {
          key: "form",
          get: function get() {
            return this.searchForm.controls;
          }
        }]);

        return SearchUserComponent;
      }();

      SearchUserComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _app_services_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"]
        }];
      };

      SearchUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'search-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./search-user.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search-user/search-user.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./search-user.component.scss */
        "./src/app/search/search-user/search-user.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _app_services_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"]])], SearchUserComponent);
      /***/
    },

    /***/
    "./src/app/taskList/index.ts":
    /*!***********************************!*\
      !*** ./src/app/taskList/index.ts ***!
      \***********************************/

    /*! exports provided: TaskListComponent */

    /***/
    function srcAppTaskListIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _task_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./task-list.component */
      "./src/app/taskList/task-list.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TaskListComponent", function () {
        return _task_list_component__WEBPACK_IMPORTED_MODULE_0__["TaskListComponent"];
      });
      /***/

    },

    /***/
    "./src/app/taskList/task-list.component.scss":
    /*!***************************************************!*\
      !*** ./src/app/taskList/task-list.component.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTaskListTaskListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".table-wrapper {\n  padding-left: 2%;\n  padding-right: 2%;\n}\n.table-wrapper table.tasks {\n  border-collapse: collapse;\n  border-spacing: 0 15px;\n  background-color: #ECECEB;\n  table-layout: fixed;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  padding-left: 5%;\n  padding-right: 2%;\n}\n.table-wrapper table.tasks tr {\n  display: table-row;\n}\n.table-wrapper table.tasks tr th {\n  background-color: #ECECEB;\n}\n.table-wrapper table.tasks tr td {\n  display: table-cell;\n  font-size: 20px;\n  color: black;\n  padding: 0;\n}\n.table-wrapper table.tasks tr td:first-of-type div {\n  background-color: #ECECEB;\n}\n.table-wrapper table.tasks tr td:nth-child(2) div {\n  border-top-left-radius: 24px;\n  border-bottom-left-radius: 24px;\n}\n.table-wrapper table.tasks tr td:nth-last-child(1) div {\n  border-top-right-radius: 24px;\n  border-bottom-right-radius: 24px;\n}\n.table-wrapper table.tasks tr td div {\n  border-width: 0 0;\n  background-color: #ffffff;\n  /* now, here you can add the margin */\n  margin-bottom: 5px;\n  margin-top: 5px;\n  /* just some nice padding, you don't really need this */\n  padding: 10px;\n}\n.table-wrapper table.tasks tr td .lastRow {\n  padding: 0;\n}\n.table-wrapper table.tasks tr td .lastRow .edit-button {\n  font-family: \"Segoe UI\";\n  font-size: 20px;\n  color: black;\n  background-color: #FFD500;\n  width: 100%;\n  height: 50px;\n  border-radius: 24px;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza0xpc3QvdGFzay1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFFRSx5QkFBQTtFQUNBLHNCQUFBO0VBRUEseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQURKO0FBR0k7RUFDRSxrQkFBQTtBQUROO0FBSU07RUFDRSx5QkFBQTtBQUZSO0FBS007RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUhSO0FBTVU7RUFDRSx5QkFBQTtBQUpaO0FBU1U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0FBUFo7QUFZVTtFQUNFLDZCQUFBO0VBQ0EsZ0NBQUE7QUFWWjtBQWNRO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdURBQUE7RUFDQSxhQUFBO0FBWlY7QUFjUTtFQUNFLFVBQUE7QUFaVjtBQWFVO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFYWiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tMaXN0L3Rhc2stbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS13cmFwcGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG5cclxuICB0YWJsZS50YXNrcyB7XHJcblxyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwIDE1cHg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRUNFQjtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG5cclxuICAgIHRyIHtcclxuICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG5cclxuXHJcbiAgICAgIHRoIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VCO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VCO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjRweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bnRoLWxhc3QtY2hpbGQoMSkge1xyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGJvcmRlci13aWR0aDogMCAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIC8qIG5vdywgaGVyZSB5b3UgY2FuIGFkZCB0aGUgbWFyZ2luICovXHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAvKiBqdXN0IHNvbWUgbmljZSBwYWRkaW5nLCB5b3UgZG9uJ3QgcmVhbGx5IG5lZWQgdGhpcyAqL1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxhc3RSb3cge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC5lZGl0LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZENTAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/taskList/task-list.component.ts":
    /*!*************************************************!*\
      !*** ./src/app/taskList/task-list.component.ts ***!
      \*************************************************/

    /*! exports provided: TaskListComponent */

    /***/
    function srcAppTaskListTaskListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskListComponent", function () {
        return TaskListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_editTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/editTask */
      "./src/app/editTask/index.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _app_services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/_services/task.service */
      "./src/app/_services/task.service.ts");

      var TaskListComponent = /*#__PURE__*/function () {
        function TaskListComponent(modalService, taskService) {
          _classCallCheck(this, TaskListComponent);

          this.modalService = modalService;
          this.taskService = taskService;
          this.withHeader = false;
          this.dataEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(TaskListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "filterData",
          value: function filterData() {
            var _this12 = this;

            if (!this.data || this.data.length == 0) {
              return [];
            }

            if (this.filterByStatus) {
              return this.data.filter(function (x) {
                return x.status == _this12.filterByStatus;
              });
            }

            return this.data;
          }
        }, {
          key: "editTask",
          value: function editTask(task) {
            var _this13 = this;

            var ngbModalRef = this.modalService.open(_app_editTask__WEBPACK_IMPORTED_MODULE_2__["EditTaskComponent"], {
              windowClass: 'add-task-window',
              backdrop: 'static',
              keyboard: false,
              centered: true,
              size: "xl"
            });
            ngbModalRef.componentInstance.loadTaskToEdit(task);
            ngbModalRef.result.then(function (request) {
              if (request) {
                console.log(request);

                switch (request.operation) {
                  case 'createOrUpdate':
                    {
                      _this13.taskService.update(request.data).subscribe(function () {
                        return _this13.dataEdited.emit();
                      });

                      break;
                    }

                  case 'delete':
                    {
                      _this13.taskService["delete"](request.data).subscribe(function () {
                        return _this13.dataEdited.emit();
                      });

                      break;
                    }
                }
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "deleteTask",
          value: function deleteTask(task) {}
        }, {
          key: "tasks",
          get: function get() {
            return this.filterData();
          }
        }]);

        return TaskListComponent;
      }();

      TaskListComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
        }, {
          type: _app_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]
        }];
      };

      TaskListComponent.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        withHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        filterByStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dataEdited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      TaskListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'task-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./task-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/taskList/task-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./task-list.component.scss */
        "./src/app/taskList/task-list.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _app_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]])], TaskListComponent);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrl: 'https://patrickoo-car-app.herokuapp.com'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\user\IdeaProjects\car-app\app-frontend\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map