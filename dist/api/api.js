'use strict';

var _wxRequest = require('./../utils/wxRequest.js');

// let env = "-test" //-dev 或者 -test
var host = 'http://127.0.0.1:9000';
// const host = 'https://www.takeiteasydude.com'

/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-20T10:06:16+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: api.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-26T15:41:44+08:00
 */
var verifyinvite = function verifyinvite(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api/verifyinvite");
};
var newportfolio = function newportfolio(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api/newportfolio");
};
var getlist = function getlist(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api/getlist");
};
var getdetail = function getdetail(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api/getdetail");
};

module.exports = {
  verifyinvite: verifyinvite,
  newportfolio: newportfolio,
  getlist: getlist,
  getdetail: getdetail
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJob3N0IiwidmVyaWZ5aW52aXRlIiwicGFyYW1zIiwibmV3cG9ydGZvbGlvIiwiZ2V0bGlzdCIsImdldGRldGFpbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBU0M7O0FBSUE7QUFDQSxJQUFNQSxPQUFPLHVCQUFiO0FBQ0E7O0FBZkQ7Ozs7Ozs7OztBQWlCQyxJQUFNQyxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRDtBQUFBLFNBQVksMEJBQVVBLE1BQVYsRUFBa0JGLE9BQU8sbUJBQXpCLENBQVo7QUFBQSxDQUFyQjtBQUNBLElBQU1HLGVBQWUsU0FBZkEsWUFBZSxDQUFDRCxNQUFEO0FBQUEsU0FBWSwwQkFBVUEsTUFBVixFQUFrQkYsT0FBTyxtQkFBekIsQ0FBWjtBQUFBLENBQXJCO0FBQ0EsSUFBTUksVUFBVSxTQUFWQSxPQUFVLENBQUNGLE1BQUQ7QUFBQSxTQUFZLDBCQUFVQSxNQUFWLEVBQWtCRixPQUFPLGNBQXpCLENBQVo7QUFBQSxDQUFoQjtBQUNBLElBQU1LLFlBQVksU0FBWkEsU0FBWSxDQUFDSCxNQUFEO0FBQUEsU0FBWSwwQkFBVUEsTUFBVixFQUFrQkYsT0FBTyxnQkFBekIsQ0FBWjtBQUFBLENBQWxCOztBQUVBTSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZOLDRCQURlO0FBRWZFLDRCQUZlO0FBR2ZDLGtCQUhlO0FBSWZDO0FBSmUsQ0FBakIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAQXV0aG9yOiBNaWNoYWVsQ2hlbiA8bXltYWM+XG4gKiBARGF0ZTogICAyMDE3LTExLTIwVDEwOjA2OjE2KzA4OjAwXG4gKiBARW1haWw6ICB0ZWFjaGVyaW5jYWZlQDE2My5jb21cbiAqIEBQcm9qZWN0OiBvbmVfc2VydmVyXG4gKiBARmlsZW5hbWU6IGFwaS5qc1xuICogQExhc3QgbW9kaWZpZWQgYnk6ICAgbXltYWNcbiAqIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDIwMTctMTEtMjZUMTU6NDE6NDQrMDg6MDBcbiAqL1xuIGltcG9ydCB7XG4gICB3eFJlcXVlc3RcbiB9IGZyb20gJy4uL3V0aWxzL3d4UmVxdWVzdCc7XG5cbiAvLyBsZXQgZW52ID0gXCItdGVzdFwiIC8vLWRldiDmiJbogIUgLXRlc3RcbiBjb25zdCBob3N0ID0gJ2h0dHA6Ly8xMjcuMC4wLjE6OTAwMCdcbiAvLyBjb25zdCBob3N0ID0gJ2h0dHBzOi8vd3d3LnRha2VpdGVhc3lkdWRlLmNvbSdcblxuIGNvbnN0IHZlcmlmeWludml0ZSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyBcIi9hcGkvdmVyaWZ5aW52aXRlXCIpO1xuIGNvbnN0IG5ld3BvcnRmb2xpbyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyBcIi9hcGkvbmV3cG9ydGZvbGlvXCIpO1xuIGNvbnN0IGdldGxpc3QgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgXCIvYXBpL2dldGxpc3RcIik7XG4gY29uc3QgZ2V0ZGV0YWlsID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArIFwiL2FwaS9nZXRkZXRhaWxcIik7XG5cbiBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgIHZlcmlmeWludml0ZSxcbiAgIG5ld3BvcnRmb2xpbyxcbiAgIGdldGxpc3QsXG4gICBnZXRkZXRhaWxcbiB9XG4iXX0=