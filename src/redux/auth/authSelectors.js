
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsFetchingCurrent = state => state.auth.IsFetchingCurrentUser;
const getUserError = state => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrent,
  getUserError,
};

export default authSelectors;
