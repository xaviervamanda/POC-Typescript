import express from 'express';
import "express-async-errors";
import dotenv from 'dotenv';
import router from '@/routers/index';

const app = express();
app.use(express.json());
dotenv.config();

app.get ("/health", ((_req, res) => res.send("OK!")));
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server is up and running at port ${port}!`)
});