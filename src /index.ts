import express, {Application, Request, Response} from "express"; //Jika menggunakan typescript wajib menggunakan Aplication Request dan Response
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
//router
import UserRoutes from "./Routers/UserRoutes";


class App {
    public app: Application;

    constructor(){
        this.app = express();
        this.plugins();
        this.routes();
    }

    protected plugins(): void{
        this.app.use(bodyParser.json()); //aplikasi express ini menggunakan plugins bodyParser, fungsinya untuk melihat isi parameter dari sebuah request
        this.app.use(morgan("dev")); //jalan di mode development
        this.app.use(compression());
        this.app.use(cors());
        this.app.use(helmet());
    }

    protected routes():void {
        this.app.route("/").get((req: Request, res: Response)=>{
            res.send("Hi, ini router pertama saya di express typescript")
        })
        this.app.use("/users", UserRoutes);
    }
}

const port: number = 8080;
const app = new App().app
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

// const app = express();

// app.route("/").get((req, res)=>{
//     res.send("Hi, ini router pertama saya");
// })

// app.listen(8080);