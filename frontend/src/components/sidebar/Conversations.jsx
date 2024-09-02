import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {

  const {loading, conversations} = useGetConversations();
  console.log("Conversations: ", conversations);

  return ( 
    <div className="py-2 flex flex-col overflow-auto">
    
      {conversations.map((convo, index) => (
        <Conversation key={convo._id} conversation = {convo} isLast = {index === conversations.length-1}
        />
      ))}

      {loading ? (<span className="loading loading-dots loading-lg mx-auto"></span>) : null}
    </div>
  );
}
 
export default Conversations;