import { useEffect, useState } from "react";
import useConversations from "../store/useConversations";
import toast from "react-hot-toast";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const {messages, setMessages, selectedConversation} = useConversations();

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();

        if (data.error){
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally{
        setLoading(false);
      }
    }

    if (selectedConversation?._id)  getMessage();
  }, [selectedConversation, setMessages]);

  return {loading, messages};
}
 
export default useGetMessage;