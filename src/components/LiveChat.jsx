import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSLice";
import ChatMessage from "./ChatMessage";
import makeRandomMessage, { generateRandomName } from "../utils/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            console.log("API Polling");

            dispatch( 
                addMessage({
                    name: generateRandomName(),
                    message: makeRandomMessage(25) + "🚀",
                })
            );
}, 1500);
return () => clearInterval(i);
}, []);

return (
    <>
    <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
     <div> {chatMessages.map((message, index) => (
          <ChatMessage key={index} name={message.name} message={message.message} />
        ))}
        </div>
        </div>
        <form
        onSubmit={(e) => {
            e.preventDefault();
            dispatch(
                addMessage({
                    name: "Nikhil",
                    message: liveMessage,
                })
            );
            setLiveMessage("");
        }}
        >
            <input
            value={liveMessage}
            onChange={(e) =>{
             setLiveMessage(e.target.value);
            }}
             type="text" className="w-full p-2 border border-gray-400 rounded-lg mt-2" placeholder="Type a message..." />
            <button className="px-2 mx-2 bg-green-100">Send</button>
        </form>
        </>
)

};
export default LiveChat;