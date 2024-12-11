import React, { useState, useEffect } from 'react';
import './LogDisplay.css';
  import PropTypes from 'prop-types';

  const LogDisplay = ({ totalTickets, ticketReleaseRate, customerRetrievalRate, maxTicketCapacity }) => {
    const [logDetails, setLogDetails] = useState(null);

    useEffect(() => {
      fetch('http://localhost:8080/api/config', {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setLogDetails(data);
        console.log('Log details:', data);
      })
      .catch(error => console.error('Error fetching log details:', error));
    }, []);
    
    if (!logDetails) {
      return <div>Loading...</div>;
    }

    return (
      <div className='LogContainer'>
      <p>Total Number Of Tickets : {totalTickets}</p>
      <p>Ticket Release Rate : {ticketReleaseRate}</p>
      <p>Customer Retrieval Rate : {customerRetrievalRate}</p>
      <p>Max Ticket Capacity : {maxTicketCapacity}</p>
      </div>
    );
  };

  LogDisplay.propTypes = {
    totalTickets: PropTypes.string,
    ticketReleaseRate: PropTypes.string,
    customerRetrievalRate: PropTypes.string,
    maxTicketCapacity: PropTypes.string,
  };

  export default LogDisplay;
  
