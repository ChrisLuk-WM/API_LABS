import { RouterContext } from "koa-router";
import passport from "koa-passport";

import * as users from "../models/users";
import { BasicStrategy } from "passport-http";

const verifyPassword = (users: any, password: any) => {
  return users.password == password;
};

passport.use(
  new BasicStrategy(async (username, password, done) => {
    // if (username === "admin" && password === "admin"){
    //     done(null, {username: "admin"})
    // } else {
    //     done(null, false)
    // }

    let result: any[] = [];
    try {
      result = await users.findByUsername(username);
    } catch (error) {
      console.error(
        `Error during authentication for user ${username}: ${error}`
      );
      done(null, false);
    }
    if (result.length) {
      const user = result[0];
      if (verifyPassword(user, password)) {
        done(null, { user: user });
      } else {
        console.log(`Password incorrect for ${username}`);
        done(null, false);
      }
    } else {
      console.log(`No user found with username ${username}`);
      done(null, false);
    }
  })
);

export const basicAuth = async (ctx: RouterContext, next: any) => {
  await passport.authenticate("basic", { session: false })(ctx, next);

  if (ctx.status == 401) {
    ctx.body = {
      msg: "NO",
    };
  } else {
    ctx.body = {
      msg: "OK",
    };
  }
};
