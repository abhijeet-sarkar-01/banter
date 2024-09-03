import { useEffect } from 'react';
import {useSocketContext} from '../context/SocketContext'
import useConversation from '../store/useConversations'
import messageAlert from '../assets/sounds/messageAlert2.wav'


const useListenMessages = () => {
  const {socket} = useSocketContext();
  const {messages, setMessages} = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
      const sound = new Audio(messageAlert);
      sound.volume = 0.05;
      sound.play();
    });

    return () => socket?.off("newMessage");
  }, [messages, setMessages, socket]);
}
 
export default useListenMessages;