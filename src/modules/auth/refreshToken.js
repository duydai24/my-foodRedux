export const RefreshTokenSetup = (res) => {
  let refreshTiming = (res.tokenObj.exprires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.exprires_in || 3600 - 5 * 60) * 1000;
    setTimeout(refreshToken, refreshTiming);
  };
  setTimeout(refreshToken, refreshTiming);
};
