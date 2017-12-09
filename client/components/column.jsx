import React from 'react';
import ApplicationChip from '../components/applicationChip.jsx';
import { getAllApplications } from '../actions/jobApplications.jsx';
import { connect } from 'react-redux';


export const Column = ({ applications }) => {
  console.log('in column', applications)
  return(
    <div>
    <h1>{applications.applications[0].status}</h1>
    <ul>
      {applications.applications.map((application) =>
        <ApplicationChip
          key={application.id}
          id={application.id}
          application={application}
        />
      )}
    </ul>
  </div>
);
}

// dispatches an action
const fetchApplicationsActionCreator = () => {
  return {
    type: 'FETCH_APPLICATIONS',
    payload: getAllApplications(),
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    applications: state.applicationReducer
  };
}

export default connect(mapStateToProps, { fetchApplicationsActionCreator })(Column)