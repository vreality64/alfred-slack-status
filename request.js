function request({
  data,
  url,
  token
}) {
  const stdout = $.NSPipe.pipe;
  const task = $.NSTask.alloc.init;

  task.setLaunchPath('/usr/bin/curl');
  task.setArguments([
    '-X',
    'POST',
    '-H',
    `Authorization: Bearer ${token}`,
    '-H',
    'Content-type: application/json',
    '--data',
    data,
    url,
  ]);
  task.standardOutput = stdout;
  task.launch;

  const dataOut = stdout.fileHandleForReading.readDataToEndOfFile;
  const stringOut = $.NSString.alloc.initWithDataEncoding(dataOut, $.NSUTF8StringEncoding).js;

  return stringOut;
}

if (typeof module === 'object') {
  module.exports = request
}