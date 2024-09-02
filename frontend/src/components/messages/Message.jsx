import useConversations from "../../store/useConversations";
import { useAuthContext } from "../../context/authContext";

const Message = ({message}) => {

  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversations();
  const loggedUser = message.senderId === authUser._id;
  const chatBubblebg = loggedUser ? "bg-blue-500" : "bg-gray-600";
  const profilepic = loggedUser ? authUser.profilePic : selectedConversation.profilePic;
  const chatBubbleClass = loggedUser ? "chat-end" : "chat-start";
  const time = extractTime(message.createdAt);

  return ( 
    <div className={`chat ${chatBubbleClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={profilepic} 
            alt="user avatar" />
        </div>
      </div>

      <div className= {`chat-bubble text-white ${chatBubblebg}`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 item-center">{time}</div>
    </div>
  );
}
 
export default Message;


function extractTime(dateString) {
	const date = new Date(dateString);
	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	return `${hours}:${minutes}`;
}

function padZero(number) {
	return number.toString().padStart(2, "0");
}