const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getCurrentUser = state => state.auth.сurrentUser;
const getLoader = state => state.auth.loader;

export { getIsLoggedIn, getUserName, getCurrentUser, getLoader };
