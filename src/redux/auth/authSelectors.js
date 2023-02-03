const getIsloggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsFetchingCurrent = state => state.auth.IsFetchingCurrentUser;
const getUserError = state => state.auth.error;

const authSelectors = {
    getIsloggedIn,
    getUserName,
    getIsFetchingCurrent,
    getUserError
};

export default authSelectors;
