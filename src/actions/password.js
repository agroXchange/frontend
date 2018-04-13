import * as request from "superagent";

const baseUrl = "http://localhost:4008";

export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";

export const sendForgotPassword = (email) => dispatch =>
  request
    .post(`${baseUrl}/forgotpassword`)
    .send({ email })
    .then(result => {
      dispatch({
        type: FORGOT_PASSWORD_SUCCESS,
        payload: result.body
      });
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: FORGOT_PASSWORD_FAILED,
          payload: err.response.body.message || "Unknown error"
        });
      } else {
        console.error(err);
      }
    });

    export const resetPassword = (password, token) => dispatch =>
      request
        .post(`${baseUrl}/resetpassword`)
        .set("Authorization", `Bearer ${token}`)
        .send({ password })
        .then(result => {
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: result.body
          });
        })
        .catch(err => {
          if (err.status === 400) {
            dispatch({
              type: RESET_PASSWORD_FAILED,
              payload: err.response.body.message || "Unknown error"
            });
          } else {
            console.error(err);
          }
        });
