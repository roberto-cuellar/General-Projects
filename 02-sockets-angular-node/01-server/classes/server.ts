import express from 'express'
import { SERVER_PORT } from '../global/environment';
import socketIO from 'socket.io';
import http from 'http'
import * as socket from '../sockets/socket';

export default class Server{

    private static _instance: Server;

    public app:express.Application;
    public port: number;
    public io: socketIO.Server;
    private httpServer: http.Server;


    private constructor() { // Para utilizar el patrón singleton
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server(this.app);
        this.io = new socketIO.Server( this.httpServer, {
            cors: {
                origin: "http://localhost:4200",
                credentials:true
            }
        });

        this.escucharSockets();

    }
    
    public static get instance(){
        return this._instance || (this._instance = new this() )
    }

    start(callback: any) { // Cambiar tipado a Function
        this.httpServer.listen( this.port, callback );
    }

    escucharSockets(){
        this.io.on('connection',cliente =>{
            console.log('Nuevo cliente Conectado');
            socket.deconectar(cliente);
        })
    }
}