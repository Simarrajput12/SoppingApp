/* eslint-disable */
"use strict";

let Regex = {
  validateEmail: function (val) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      val
    );
  },

  validateEmoji: function (text) {
    let reg = /[\uD83C-\uDBFF\uDC00-\uDFFF]+/g;
    return reg.test(text);
  },

  validateMobile: function (text) {
    return /^\+(?:[0-9] ?){6,14}[0-9]$/.test(text);
  },

  validateMobileWithoutCC: function (val) {
    return /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(
      val
    );
  },

  validateString: function (val) {
    let stringRegex = /^[a-zA-Z\x20]{3,25}$/;
    let emogiRegex = /[\uD83C-\uDBFF\uDC00-\uDFFF]+/g;
    if (stringRegex.test(val.trim())) {
      return !emogiRegex.test(val.trim());
    }
    return false;
  },


  validatePassword: function (val) {
    return /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]\S{5,16}$/.test(val);
  },

  validateNumbers: function (val) {
    return /^[0-9]{0,}$/.test(val);
  },














};

module.exports = Regex;
