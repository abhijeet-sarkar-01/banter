import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import useConversations from "../../store/useConversations";
import { useEffect } from "react";

const MessageContainer = () => {

  const {selectedConversation, setSelectedConversation} = useConversations();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    }
  }, [setSelectedConversation])

  const noChatSelected = true;
  return ( 
    <div className="w-full flex flex-col">
      {!selectedConversation ? <NoChatSelected /> : (
        <>
        <div className="bg-slate-500 px-4 py-2 mb-2">
          <span className="label-text">To: <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span></span>
        </div>

        <Messages />
        <MessageInput />
      </>
      )}
    </div>
  );
}
 
export default MessageContainer;

const NoChatSelected = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Hey!  👋</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};