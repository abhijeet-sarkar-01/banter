import { FaUserAstronaut } from "react-icons/fa";
import useConversations from "../../store/useConversations";

const Conversation = ({conversation, isLast}) => {

  const {selectedConversation, setSelectedConversation} = useConversations();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
 			<div className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer hover:bg-blue-500 transition-all duration-200 ${isSelected ? "bg-blue-500" : ""}`}
      onClick={() => setSelectedConversation(conversation)}>
 				<div className='avatar online'>
 					<div className='w-12 rounded-full'>
 						<img
 							src={conversation.profilePic}
 							alt='user avatar'
 						/>
 					</div>
 				</div>

 				<div className='flex flex-col flex-1'>
 					<div className='flex gap-3 justify-between'>
 						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
 						<span className='text-xl'></span>
 					</div>
 				</div>
 			</div>

      {!isLast ? (<div className="divider my-0 py-0 h-1"></div>) : null}

 		</>
  );
}

export default Conversation;