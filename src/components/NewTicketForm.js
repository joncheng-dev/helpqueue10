import React from "react";
import ReusableForm from "./ReusableForm";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewTicketForm(props) {
  function addNewTicket(event) {
    event.preventDefault();

    props.onSubmission({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <h2>New Ticket Form</h2>
      <ReusableForm onSubmittingForm={addNewTicket} buttonText="Create New Ticket" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onSubmission: PropTypes.func,
};

export default NewTicketForm;
