var App = (function(app){

  // Create Log Module
  app.Log = {
    enable: false
  };

  //Check if Log is Enabled
  app.Log.isEnabled = function(){
    return this.enable;
  };

  //Write log to console
  app.Log.write = function(content, prefix){
    var _prefix = prefix || "Default Logging";
    if(this.enable){
      console.log("---BEGIN " + _prefix + "---");
      console.log(content);
      console.log("---END " + _prefix + "---");
    }
  };

  //Write log string in one line
  app.Log.writeString = function(content, prefix){
    var _prefix = prefix || "Log Tag: ";
    if(this.enable){
      console.log(_prefix + " : " + content);
    }
  };

  //Write method log
  app.Log.writeMethod = function(name){
    if(this.enable){
      console.log("[ Method Logging ] ---" + name + "()");
    }
  }

  //Method aliases
  app.Log.w = app.Log.write;
  app.Log.ws = app.Log.writeString;
  app.Log.m = app.Log.writeMethod;

  //Return RMC instance
  return app;

}(App || {}));