const authRoute = require('./authRoute')
const admin = require('./admin')
const projectRoute = require('./projectsRoute')
const messageRoute = require('./messageRoute')
const policyRoute = require('./policyRoute')
const aboutRoute = require('./aboutRoute')
const orderRoute = require('./orderRoute')
const {homePageGetController,aboutPageGetController} = require("../controllers/homeController")


const routes = [

    {
        path: "/auth",
        handler: authRoute
    },
    {
        path: "/about",
        handler: aboutRoute
    },
    {
        path: "/admin",
        handler: admin
    },
    {
        path: "/project",
        handler: projectRoute
    },
    {
        path: "/policy",
        handler: policyRoute
    },
    {
        path: "/message",
        handler: messageRoute
    },
    {
        path: "/order",
        handler: orderRoute
    },
    {
        path: "/",
        handler:homePageGetController
    }
]


module.exports = app =>{
    routes.forEach(r =>{
        if(r.path === '/'){
            app.get('/',r.handler)
        }else{
            app.use(r.path, r.handler)
        }
    })
}