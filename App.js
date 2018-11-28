const koa = require('koa');
const session = require('koa-session');
const app = new koa();
const route = require('koa-route')
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const { userActions} = require("./DAO/UserDAO");

app.use(cors());
app.use(koaBody());

app.use(route.all('/', async function (ctx, next) { 
   this.set('Content-Type', 'application/json; charset=utf-8;');
})); 

app.use(route.post('/loginAction', async function (ctx, next) { 

   const reqBody = ctx.request.body;
   const userId = reqBody['userId'];
   const password = reqBody['password'];
   const where = { userId , password };
   const resultData = await userActions.loginAction(where).then((jsonObj) => jsonObj);

   if(resultData['msg'] === 'success'){
      session.sUser = resultData['user'];
   }

   this.body = resultData;
})); 

app.use(route.post('/registerAction', async function (ctx, next) { 

   const reqBody = ctx.request.body;
   const userId = reqBody['userId'];
   const password = reqBody['password'];
   const userNm = reqBody['userNm'];
   const userData = {userId , password, userNm};

   this.body = await userActions.insertUser(userData);
})); 


app.use(route.post('/checkDuplicationIdAction', async function (ctx, next) { 

   const reqBody = ctx.request.body;
   const userId = reqBody['userId'];

   this.body = await userActions.checkDuplicationID(userId);
})); 

app.listen(3001, function(){
   console.log('Server running on https://localhost:3001');
});

