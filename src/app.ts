import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import IndexRoutes from './routes/index.routes';
import DeptRoutes from './routes/depts.routes';
import UserRoutes  from './routes/users.routes';
import RoleRoutes from './routes/roles.routes';
import SupplierRoutes from './routes/supplier.routes';

//const app = express();


export class App{
    private app:Application;
        
    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }//constructor
    
    settings(){
        this.app.set('port',this.port || process.env.port || 3000);        
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); //para recibir JSON
    }

    routes(){
        this.app.use(IndexRoutes);
        this.app.use('/api/v2.0/departments',DeptRoutes);
        this.app.use('/api/v2.0/suppliers',SupplierRoutes);
        this.app.use('/api/v2.0/roles',RoleRoutes);
        this.app.use('/api/v2.0/users',UserRoutes);

    }   
    
    async listen(){

       await this.app.listen(this.app.get('port'));      
       console.log("Servidor en el puerto:"+this.app.get('port'));   

    }//Método listen

    
}//class

