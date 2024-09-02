import { useEffect, useRef } from "react";
import useGetMessage from "../../hooks/useGetMessage";
import MessageSkeleton from "../skeleton/MessageBubbleSkeleton";
import Message from "./Message";

const Messages = () => {

  const {loading, messages} = useGetMessage();  

  const lastMsgRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      lastMsgRef?.current?.scrollIntoView({ behavior: "smooth"});
    }, 100);
  }, [messages]);

  return ( 
    <div className="px-4 flex-1 overflow-auto">

      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message._id} ref={lastMsgRef}>
          <Message message={message} />
        </div>
      ))}

      {loading && [...Array(5)].map((_, idx) => 
        <MessageSkeleton key={idx}/>
      )}

      {!loading && messages.length === 0 && (<p className="text-center">Send a message to start a conversation 💙</p>)}



    </div>
   );
}
 
export default Messages;