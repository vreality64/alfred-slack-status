ObjC.import('stdlib');

const activation = $.getenv('activation');

function run(argv) {
  return JSON.stringify({
    presence: activation === 'active' ? 'auto' : 'away'
  })
}