export const signup = (user, success, error) => (
  $.ajax({
    type: 'post',
    url: 'api/users',
    data: user,
    success,
    error
  })
);

export const login = (currentUser, success, error) => (
  $.ajax({
    type: 'post',
    url: 'api/session',
    data: currentUser,
    success,
    error
  })
);

export const logout = () => (
  $.ajax({
    type: 'delete',
    url: 'api/session'
  })
);
