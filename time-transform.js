ObjC.import('stdlib');

const minute = parseInt($.getenv('minute'), 10);
const hour = parseInt($.getenv('hour'), 10);
const day = parseInt($.getenv('day'), 10);

function run(argv) {
  const query = argv[0];

  return parseToUnitTime(query);
}

function parseToUnitTime(query) {
  const time = /(\d+)([mhd])/i.exec(query);

  if (time == null) {
    // do not set expiration time
    return 0;
  }

  const ms = parseInt(time[1], 10);
  const unit = time[2];

  const currentUnitTime = Math.floor(new Date().getTime() / 1000.0);
  const additionalTime = getUnitTime(ms, unit);

  return currentUnitTime + additionalTime;
}

function getUnitTime(ms, unit) {
  switch (unit) {
    case 'm':
      return ms * minute;
    case 'h':
      return ms * hour;
    case 'd':
      return ms * day;
  }
}