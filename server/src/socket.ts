
import { Server, Socket } from "socket.io";


const EVENTS = {
    connect: " connect"
};

function socket({ io }: { io: Server }) {
    console.info(`Sockets enabled`);

    io.on(EVENTS.connect, (socket: Socket) => {
        console.info("User connected " + socket.id);
    });
}

  

export default socket;