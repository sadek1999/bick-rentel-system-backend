import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/router';
import notFound from './app/middlewares/notFound';


const app:Application = express()

// app.use(express.json())
// app.use(cors())

// app.use("/api/v1",router)

// app.get('/', (req, res) => {
  // res.send('Hello World!')
// })


// app.use(notFound)


// export default app




app.use(express.json());
// app.use(cookieParser())
app.use(cors());

app.use("/api/v1", router);


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// app.use(globalErrorHandler);
app.use(notFound);

export default app;
