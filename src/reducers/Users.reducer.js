import { GET_ASSIGNED_OFFICE, UPLOAD_FILE } from "../actions/Actions";

const initalState = {
  assignedOfficeList: [],
  assignedOfficeLoader: false,
  uploadFileLoader: false,
  uploadFileProgress: 0,
};

export function usersReducer(state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    // GET LOCATIONS
    case GET_ASSIGNED_OFFICE.LOADING:
      return { ...state, assignedOfficeLoader: true };
    case GET_ASSIGNED_OFFICE.SUCCESS:
      return {
        ...state,
        assignedOfficeLoader: false,
        assignedOfficeList: payload,
      };
    case GET_ASSIGNED_OFFICE.ERROR:
      return { ...state, assignedOfficeLoader: false };

    // GET LOCATIONS
    case UPLOAD_FILE.LOADING:
      return { ...state, uploadFileLoader: true };
    case UPLOAD_FILE.PROGRESS:
      return { ...state, uploadFileLoader: true, uploadFileProgress: payload };
    case UPLOAD_FILE.SUCCESS:
      return { ...state, uploadFileLoader: false };
    case UPLOAD_FILE.ERROR:
      return { ...state, uploadFileLoader: false };

    default:
      return state;
  }
}
