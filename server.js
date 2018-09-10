const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const compress = require('koa-compress');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();

app.use(compress());
app.use(serve(__dirname + '/dist'));
app.use(views(__dirname + '/dist', { extension: 'html' }));

router.get('*', async ctx => {
  await ctx.render('index');
});

app.use(router.routes());

app.listen(3000, () => console.log('App is running on port 3000'));
