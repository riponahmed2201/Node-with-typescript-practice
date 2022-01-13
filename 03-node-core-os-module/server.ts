import http, {Server, IncomingMessage, ServerResponse} from 'http';
import os from 'os';

const hostname:string = '127.0.0.1';
const port:number = 4000;

const server:Server = http.createServer((request:IncomingMessage, response:ServerResponse)=>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    // OS Module
    let osData = {
        totalMemory : os.totalmem(),
        freememory : os.freemem(),
        homedir : os.homedir(),
        computerName : os.hostname()
    };

    response.end(`<pre>${JSON.stringify(osData)}</pre>`);

   // response.end(`<h style="font-family: Lato,sans-serif; color: green">Welcome to Node JS Server</h>`)
});

server.listen(port, hostname, ()=>{
    console.log(`Node JS Server is started at http://${hostname}:${port}`);
});