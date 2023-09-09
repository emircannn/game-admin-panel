import { useEffect, useState } from "react";
import socketClient from "socket.io-client";

let socket

const SERVER = 'https://game-backend-server.onrender.com'

export const connectWebSocket =()=> {
    socket = socketClient(SERVER)
}

export function useSocket() {
    const [socket, setSocket] = useState(null);
  
    useEffect(() => {
      const socket = socketClient(SERVER);
      setSocket(socket);
      return () => {
        socket.disconnect();
      };
    }, []);
  
    return socket;
  }