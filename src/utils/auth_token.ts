export const removeUser = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("token")!);
};

export const getAccessToken = () => {
  const user = getCurrentUser();
  if (user) {
    const accessToken: string = user;
    return accessToken;
  }
  return {};
};
