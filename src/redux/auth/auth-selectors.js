const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getCurrentUser = state => state.auth.сurrentUser;

export { getIsLoggedIn, getUserName, getCurrentUser };
