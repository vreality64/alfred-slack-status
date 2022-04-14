ObjC.import('stdlib');

//
// Emulating npm's require()
// (https://github.com/dtinth/JXA-Cookbook/wiki/Importing-Scripts)
//

ObjC.import('Foundation');
var fm = $.NSFileManager.defaultManager;
var require = function (path) {
  var contents = fm.contentsAtPath(path.toString()); // NSData
  contents = $.NSString.alloc.initWithDataEncoding(contents, $.NSUTF8StringEncoding);

  var module = {
    exports: {}
  };
  var exports = module.exports;
  eval(ObjC.unwrap(contents));

  return module.exports;
};

// Slack 상태변경 API 요청 스크립트
const request = require('./request.js');

const API_BASE = $.getenv('API_BASE');
const token = $.getenv('token');

function run(argv) {
  const data = argv[0];

  return request({
    url: API_BASE,
    token,
    data,
  });
}