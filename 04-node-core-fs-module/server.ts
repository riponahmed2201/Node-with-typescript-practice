import http, {Server, IncomingMessage, ServerResponse} from 'http';
import fs from 'fs';
import path from 'path';

const hostname:string = '127.0.0.1';
const port:number = 3000;

const server:Server = http.createServer((request:IncomingMessage, response:ServerResponse)=>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    // fs Module
    fs.readFile(path.join(__dirname,'data','notes.txt'),'utf-8',(error, result)=>{
        if (error) {
            console.log(error);
        }
        fs.writeFile(path.join(__dirname,'data','data.txt'),result,'utf-8',(error)=>{
            if (error) {
                console.log(error);
            }
        });

        response.end(`<pre>Data is written to the file</pre>`);

    });
});

server.listen(port, hostname, ()=>{
    console.log(`Node JS Server is started at http://${hostname}:${port}`);
});