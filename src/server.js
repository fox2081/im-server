let WebSocketServer = require('ws')

let wss = new WebSocketServer.Server({ port: 14001 })

wss.on('connection', ws => {
  console.log('Client connected: ')

  const loop = setInterval(() => {
    const data = { code: 'haveCar', data: { tunnelIds: ['02a011513c35405e9adaa5b5e0cee2c2'] } }
    ws.send(JSON.stringify(data))
  }, 3000)

  ws.on('message', (msg) => {
    console.log('Message received')
  })

  ws.on('close', () => {
    console.log('Message closed')
    clearInterval(loop)
    ws.terminate()
  })
})
