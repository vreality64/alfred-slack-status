ObjC.import('stdlib');

const userId = $.getenv('user_id');
const emoji = $.getenv('emoji');
const message = $.getenv('message');

function run(argv) {
  const query = argv[0];
  const parsed = parseInt(query, 10);
  const time = Number.isNaN(parsed) ? null : parsed;

  return JSON.stringify({
    profile: {
      user: userId,
      status_emoji: emoji,
      status_text: message,
      ...(time != null && {
        status_expiration: time
      }),
    }
  })
}