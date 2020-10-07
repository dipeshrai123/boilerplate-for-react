import { api, APIS } from "../config/Config";
import { GET_ASSIGNED_OFFICE, UPLOAD_FILE } from "../actions/Actions";

export function getAssignedOffice() {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: GET_ASSIGNED_OFFICE.LOADING });

      res = await api(`${APIS.assignedoffice}`);

      const { success, data } = res.data;

      if (success) {
        dispatch({
          type: GET_ASSIGNED_OFFICE.SUCCESS,
          payload: data.data.locations,
        });
      } else {
        dispatch({ type: GET_ASSIGNED_OFFICE.ERROR });
      }
      return 1;
    } catch ({ message }) {
      dispatch({ type: GET_ASSIGNED_OFFICE.ERROR });
      return 0;
    }
  };
}

// UPLOAD THE FILE
export function uploadFile(formData) {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: UPLOAD_FILE.LOADING });

      res = await api(`${APIS.uploadfile}`, "POST", formData, {
        file: true,
        fileUploadProgress: function (progress) {
          dispatch({ type: UPLOAD_FILE.PROGRESS, payload: progress });
        },
      });
      const { success } = res.data;

      if (success) {
        dispatch({ type: UPLOAD_FILE.SUCCESS });
      } else {
        dispatch({ type: UPLOAD_FILE.ERROR });
      }

      return 1;
    } catch ({ message }) {
      dispatch({ type: UPLOAD_FILE.ERROR });
      return 0;
    }
  };
}
