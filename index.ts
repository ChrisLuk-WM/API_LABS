import Koa from 'koa';
// import Router, { RouterContext } from 'koa-router';
import logger from 'koa-logger';
import json from 'koa-json';
import serve from 'koa-static'; 
// import bodyParser from 'koa-bodyparser';
// import { CustomErrorMessageFunction, query, body, validationResults } 
//   from 'koa-req-validation';
import { router as Articles } from './routers/articles';
import { router as fuck } from './routers/special'

const app: Koa = new Koa();
// const router: Router = new Router();
// const welcomeAPI = async (ctx: RouterContext, next: any) => {
//     ctx.body = {
//         message: "Welcome to the blog API!"
//     };
//     await next();
// }


// router.get('/api/v1', welcomeAPI);

app.use(logger());
app.use(json());
app.use(Articles.routes())
app.use(fuck.routes())
app.use(serve('./doc'));
// app.use(router.routes());
app.listen(10888);