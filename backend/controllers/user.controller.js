import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    
    const loggedInUser = req.user._id;
    const allUsers = await User.find({ _id: {$ne: loggedInUser}}).select("-password");

    res.status(201).json(allUsers);

  } catch (error) {
    console.log('Error in getUsersForSidebar controller', error);
    res.status(500).send('Internal Server Error');
  }
}