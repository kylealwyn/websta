const actions = {
  Auth: {
    Login: 'LOGIN',
    Logout: 'LOGOUT',
    GetProfile: 'GET_PROFILE'
  }
};

const promisifyActionType = (action, type) => ({
  [`${action}Requested`]: `${type}_REQUESTED`,
  [`${action}Success`]: `${type}_SUCCESS`,
  [`${action}Failure`]: `${type}_FAILURE`,
});


for (const action in actions) { // eslint-disable-line
  for (const type in actions[action]) { // eslint-disable-line
    Object.assign(actions[action], promisifyActionType(type, actions[action][type]));
  }
}

console.log(actions);
export default actions;
