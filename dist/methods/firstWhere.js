"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = firstWhere;

function firstWhere(key, operator, value) {
  return this.where(key, operator, value).first() || null;
}