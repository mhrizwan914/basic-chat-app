// Components
import Input from "../components/Input";
import Button from "../components/Button";
// Socket
import socketio from "socket.io-client";
import { useEffect, useRef, useState } from "react";
// User
import { user } from "../pages/Home";
import Message from "./Message";
// Scroll to Bottom
import ScrollToBottom from "react-scroll-to-bottom";

let ENDPOINT = 'http://localhost:4500/';

let socket;

const Room = () => {
    const inputRef = useRef(null);
    const [messages, setMessages] = useState([]);
    const [id, setID] = useState(null);
    const handleSendMessage = () => {
        let value = inputRef.current.value;
        socket.emit("message", { message: value, id });
        inputRef.current.value = "";
    }
    useEffect(() => {
        socket = socketio(ENDPOINT, { transports: ['websocket'] });
        socket.on("connect", () => {
            setID(socket.id);
        })
        // Joined Send
        socket.emit("joined", { user });
        // Welcome Receive
        socket.on("welcome", (data) => {
            setMessages([...messages, data]);
            console.log(messages);
        })
        // User Joined Broadcast Send
        socket.on("userjoined", (data) => {
            setMessages([...messages, data]);
            console.log(messages);
        })
        // User Joined Broadcast Send
        socket.on("left", (data) => {
            setMessages([...messages, data]);
            console.log(messages);
        })
        return () => {
            socket.disconnect();
            socket.off();
        }
    }, [])
    useEffect(() => {
        // Reccieve Message
        socket.on("messagesend", (data) => {
            setMessages([...messages, data]);
        })
        return () => {
            socket.off();
        }
    }, [messages])
    console.log(messages);
    return (
        <div>
            <header className="bg-secondary-100 p-3">
                <h1 className="text-center text-white text-[30px] leading-normal font-bold">
                    Welcome {user ?? "Anyonmus"}
                </h1>
            </header>
            <div className="pb-3 px-3 bg-gray-100">
                <ScrollToBottom >
                    <div className="h-[50vh]">
                        {messages.map((e, i) => (
                            <Message
                                key={i}
                                message={e.message}
                                classes={e.id === id ? 'ml-auto' : 'mr-auto'}
                                user={e.id === id ? null : e.user}
                            />
                        ))}
                    </div>
                </ScrollToBottom>
                <form className="flex">
                    <div className="basis-[80%]">
                        <Input
                            placeholder="Type your message..."
                            css="focus:border-secondary-100"
                            // handle={(e) => setMessages(e.target.value)}
                            border="border-2 border-r-0 border-primary-100"
                            target={inputRef}
                        />
                    </div>
                    <div className="basis-[20%]">
                        <Button
                            text="Send"
                            rounded="rounded-none"
                            css="hover:opacity-80"
                            bg="bg-primary-100"
                            border="border-none"
                            handle={handleSendMessage}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Room;