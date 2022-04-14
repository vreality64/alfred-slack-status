ObjC.import('stdlib');

const token = $.getenv('token');
const userId = $.getenv('user_id');

function run() {
  if (token == null || token == '' || userId == null || userId == '') {
    return `환경변수 token, user_id 설정이 필요합니다`
  }

  return 'pass';
}