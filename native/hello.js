exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: 'local JS: Hello from native Lambda integration!'
  }
}
