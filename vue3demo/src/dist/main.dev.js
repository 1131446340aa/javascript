"use strict";

var _vue = require("vue");

var _demo = _interopRequireDefault(require("./demo4.vue"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Button from './install/Button.tsx'
(0, _vue.createApp)(_demo["default"]).mount('#app'); // createApp(Demo).use(Button).mount('#app')