import React from "react";
import Ticket from "./Ticket";

function TicketList() {
  const ticketList = [
    {
      names: "Bart and Lisa",
      location: "Treehouse",
      issue: "Missing clues",
    },
    {
      names: "Marge and Maggie",
      location: "Try 'n Save",
      issue: "item does not scan",
    },
  ];
  return (
    <React.Fragment>
      <h2>Ticket List</h2>
      <hr />
      {ticketList.map((ticket) => (
        <Ticket names={ticket.names} location={ticket.location} issue={ticket.issue} />
      ))}
    </React.Fragment>
  );
}

export default TicketList;
