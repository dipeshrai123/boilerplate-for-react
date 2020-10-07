import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAssignedOffice, uploadFile } from "../../actions/Actions";

const DashboardPage = (props) => {
  const { users, getAssignedOffice, uploadFile } = props;
  const [files, setFiles] = useState(null);

  useEffect(() => {
    getAssignedOffice();
  }, [getAssignedOffice]);

  const onSubmit = () => {
    const formData = new FormData();
    Array.from(files).forEach((img) => {
      formData.append("imageFile", img);
    });

    uploadFile(formData);
  };

  console.log(users);

  return (
    <div>
      <input type="file" onChange={(e) => setFiles(e.target.files)} multiple />
      <button onClick={() => onSubmit()}>Upload</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAssignedOffice,
      uploadFile,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
