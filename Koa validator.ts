import Koa from 'koa'
import Router, {RouterContext} from "koa-router";
import logger from "koa-logger";
import json from 'koa-json'
import bodyParser from 'koa-bodyparser';
import { CustomErrorMessageFunction, query, body, validationResults } from 'koa-req-validation';

const app: Koa = new Koa();
const router: Router = new Router();
const film: any = {
    0: {
        "name": "Film 1",
        "price": 10.2
    },
    1: {
        "name": "Film 2",
        "price": 104
    }
}

const customErrorMessage: CustomErrorMessageFunction = (_ctx: RouterContext, val:String) => {
    return "Error";
}
const validatorName = [
    body("name").isLength({min:3}).withMessage(customErrorMessage).build()
]



router.post('/film', ...validatorName, async (ctx: RouterContext, next: any) => {
    const data: any = ctx.request.body;

    let id = 0
    for (let keys in film){
        id = +keys
    }
    id += 1

    film[id] = data

    const result = validationResults(ctx)
    if (result.hasErrors()){
        ctx.status = 422
        ctx.body = {err: result.mapped()}
    } else {
        ctx.status = 200
        ctx.body = {
            "status": 200,
            "msg": "Success"
        }
    }

    console.log(data)
    await next();
})

router.get('/film', async (ctx: RouterContext, next: any) => {
    ctx.body = film;
    await next();
})

router.get('/aaa', async (ctx: RouterContext, next: any) => {
    ctx.body = { msg: 'Oh no!!' };
    await next();
})




app.use(json());
app.use(logger()).use(bodyParser())
app.use(router.routes()).use(router.allowedMethods());

app.use(async (ctx: RouterContext, next: any) => {
    try {
        await next();
        if (ctx.status === 404) {
            ctx.status = 404;
            ctx.body = { err: "No such endpoint existed" };
        }
    } catch (err: any) {
        ctx.body = { err: err };
    }
})

app.listen(10888, () => {
    console.log("Koa Started");
})