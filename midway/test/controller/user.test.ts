import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/controller/user.test.ts', () => {

    it('should POST /api/user/login', async () => {
        // create app
        const app = await createApp<Framework>();

        // make request
        const result = await createHttpRequest(app).post('/api/user/login').send(JSON.stringify({ username: 'jack', password: 'redballoon' }));
        // use expect by jest
        expect(result.statusCode).toBe(200);
        expect(result.text).toBe('Hello Midwayjs!');

        // close app
        await close(app);
    });

});