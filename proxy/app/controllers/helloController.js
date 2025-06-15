exports.getHello = (req, res) => {
  res.status(200).send('PROXY: Hello from GET!')
}

exports.postHello = (req, res) => {
  res.status(200).send('PROXY: Hello from POST!')
}
