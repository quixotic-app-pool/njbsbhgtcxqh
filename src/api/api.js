/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-20T10:06:16+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: api.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-26T15:41:44+08:00
 */
 import {
   wxRequest
 } from '../utils/wxRequest';

 // let env = "-test" //-dev 或者 -test
 const host = 'http://127.0.0.1:9000'
 // const host = 'https://www.takeiteasydude.com'

 const verifyinvite = (params) => wxRequest(params, host + "/api/verifyinvite");
 const newportfolio = (params) => wxRequest(params, host + "/api/newportfolio");
 const getlist = (params) => wxRequest(params, host + "/api/getlist");
 const getdetail = (params) => wxRequest(params, host + "/api/getdetail");

 module.exports = {
   verifyinvite,
   newportfolio,
   getlist,
   getdetail
 }
