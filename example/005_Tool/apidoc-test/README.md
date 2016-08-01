
# Tool : apidoc
* http://apidocjs.com/
* [webApi文檔好幫手-apidoc使用教程 - Naruto - 博客頻道 - CSDN.NET](http://blog.csdn.net/xumin198908/article/details/41964159)
* [apiDoc - Inline Documentation for RESTful web APIs](http://apidocjs.com/)


apidoc -i myapp/ -o apidoc -e "node_modules"


```
/**
 * @api {get} / 請求APP信息
 * @apiName  請求APP信息
 * @apiGroup User
 *
 * 
 *
 * @apiSuccess {String} return_code Firstname of the User.
 * @apiSuccess {String} return_msg  Lastname of the User.
 * @apiSuccess {String} err_code  Lastname of the User.
 * @apiSuccess {String} err_msg  Lastname of the User.
 * @apiSuccess {Object[]} appInfo  Lastname of the User.
 */
 ```