var App = (function(app) {

  //init HTTP object
  app.Http = {};

  //Send Post
  app.Http.post = function(targetUrl, requestData, successCallback, failureCallback) {
    $.ajax({
      url: targetUrl,
      data: requestData,
      type: "POST",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: successCallback,
      failure: failureCallback
    });
  };

  //GET
  app.Http.get = function(targetUrl, successCallback, failureCallback) {
    $.ajax({
      url: targetUrl,
      type: "GET",
      success: successCallback,
      failure: failureCallback
    });
  };

  return app;

}(App || {}));