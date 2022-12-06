// server.js
const jsonServer = require('json-server')
const auth = require('json-server-auth')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.db = router.db

const rules = auth.rewriter({
    // Permission rules
    users: 600
})

server.use(middlewares)
server.use(rules)
server.use(auth)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})
