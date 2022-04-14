ObjC.import('stdlib');

function run(argv) {
  const query = argv[0];
  const response = JSON.parse(query);

  return response.ok ? `[성공!]` : `[실패!]\n${errorMessage(response.error)}`;
}

function errorMessage(message) {
  switch (message) {
    case 'not_authed':
      return `token, user_id가 유효하지 않습니다. 제대로 된 값을 넣어주세요!`
    case 'invalid':
      return `데이터가 invalid 하다는데요? token, user_id를 다시 확인해주세요!`;
  }

  return message;
}