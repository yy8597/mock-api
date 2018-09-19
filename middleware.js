module.exports = function(req, res, next) {
  console.log(req.url)
    // var [url, loc, src] = req.url.match(/^(\/[^\/]+\/)(.+)/);
    /* 
      解决json-server不能处理"/web/ipList/list"这种两层路径以上的情况
      请求/web/p1/p2/p3
      相当于请求/web/p1_p2_p3
    */
    // if (!!~src.indexOf("/")) {
    //     req.url = loc + src.split("/").join("_");
    // }

    if (req.method === "POST" || req.method === "DELETE") {
        // Converts POST to GET and move payload to query params
        // This way it will make JSON Server that it's GET request
        req.method = "GET";
        req.query = req.body;
        req.url = !!~req.originalUrl.indexOf("?fail")
            ? "/web/fail"
            : "/web/success";
    }
    // console.log(req)
    // Continue to JSON Server router
    next();
};
