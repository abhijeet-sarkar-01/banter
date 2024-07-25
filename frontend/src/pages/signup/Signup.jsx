import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return ( 
    <div className='flex flex-col items-center justify-center w-96 mx-auto h-screen'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-neutral-700'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up
				</h1>

        <form>
        <div>
            <label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
            <input type='text' placeholder='Your name' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label>
            <input type='text' placeholder='Create a username' className='w-full input input-bordered h-10' />
          </div>

          <div>
          <label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Create a Password'
							className='w-full input input-bordered h-10'
						/>
          </div>

          <div>
          <label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Re-enter Password'
							className='w-full input input-bordered h-10'
						/>
          </div>

          <GenderCheckbox />


          <a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account? ⓘ
					</a>

          <div>
          <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
          </div>

        </form>
			</div>
		</div>
  );
}
 
export default Signup;