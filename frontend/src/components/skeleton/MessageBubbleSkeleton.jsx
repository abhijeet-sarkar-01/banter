const MessageSkeleton = () => {
	return (
		<>
			<div className='flex gap-4 items-center'>
				<div className='skeleton w-12 h-12 rounded-full shrink-0 bg-gray-600'></div>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-5 w-52 bg-gray-600'></div>
					<div className='skeleton h-5 w-52 bg-gray-600'></div>
				</div>
			</div>
			<div className='flex gap-3 items-center justify-end'>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-5 w-52 bg-gray-600'></div>
				</div>
				<div className='skeleton w-12 h-12 rounded-full shrink-0 bg-gray-600'></div>
			</div>
		</>
	);
};
export default MessageSkeleton;