export const COMMON_ACTION = {
  SNACKBAR_SUCCESS: 'SNACKBAR_SUCCESS',
  SNACKBAR_FAILURE: 'SNACKBAR_FAILURE',
  SNACKBAR_CLEAR: 'SNACKBAR_CLEAR',
};

export function showSuccessSnackbar(notiType = COMMON_ACTION.SNACKBAR_SUCCESS, message) {
  return {
    type: COMMON_ACTION.SNACKBAR_SUCCESS,
    notiType,
    message,
  };
}

export const clearSnackbar = () => {
  return {
    type: COMMON_ACTION.SNACKBAR_CLEAR,
  };
};
