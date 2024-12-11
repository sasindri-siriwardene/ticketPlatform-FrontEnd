import React, { Component } from 'react';
import './ConfigurationForm.css';
import LogDisplay from './LogDisplay';

class ConfigurationForm extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      totalTickets: '',
      ticketReleaseRate: '',
      customerRetrievalRate: '',
      maxTicketCapacity: '',
      showLogDisplay: false
    };
  }
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     showLogDisplay: true
  //   });
  // }

  // Handle totalTickets change
  handletotalTicketsChange = (event) => {
    this.setState({
      totalTickets: event.target.value
    });
  };

  // Handle ticketReleaseRate change
  handleticketReleaseRateChange = (event) => {
    this.setState({
      ticketReleaseRate: event.target.value
    });
  };

  // Handle customerRetrievalRate change
  handlecustomerRetrievalRateChange = (event) => {
    this.setState({
      customerRetrievalRate: event.target.value
    });
  };

  // Handle maxTicketCapacity change
  handlemaxTicketCapacityChange = (event) => {
    this.setState({
      maxTicketCapacity: event.target.value
    });
  };

  handleSubmit = async (event) => {
    console.log('showLogDisplay:', this.state.showLogDisplay);

    event.preventDefault();
    this.setState({
      showLogDisplay: false
    }, async () => {
      console.log('showLogDisplay:', this.state.showLogDisplay);

      const response = await fetch('http://localhost:8080/api/config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          totalTickets: this.state.totalTickets,
          ticketReleaseRate: this.state.ticketReleaseRate,
          customerRetrievalRate: this.state.customerRetrievalRate,
          maxTicketCapacity: this.state.maxTicketCapacity
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        this.setState({
          showLogDisplay: true
        });
      } else {
        console.error('Error:', response.statusText);
      }
    });
  }

  render() {
    return (
      <>

        <form className='configform' onSubmit={this.handleSubmit}>
          <div>
            <h4>Please Enter Details</h4>
            <label>Total Number Of Tickets:</label>
            <input
              type="number"
              placeholder='Enter Total Number Of Tickets'
              value={this.state.totalTickets}
              onChange={this.handletotalTicketsChange}
              required
            />
          </div>
          <div>
            <label>Ticket Release Rate:</label>
            <input
              type="number"
              placeholder='Enter Ticket Release Rate'
              value={this.state.ticketReleaseRate}
              onChange={this.handleticketReleaseRateChange}
              required
            />
          </div>
          <div>
            <label>Customer Retrieval Rate:</label>
            <input
              type="number"
              placeholder='Enter Customer Retrieval Rate'
              value={this.state.customerRetrievalRate}
              onChange={this.handlecustomerRetrievalRateChange}
              required
            />
          </div>
          <div>
            <label> Maximum Ticket Capacity:</label>
            <input
              type="number"
              placeholder='Enter Maximum Ticket Capacity'
              value={this.state.maxTicketCapacity}
              onChange={this.handlemaxTicketCapacityChange}
              required
            />
          </div>
          <button className='submitbutton' type="submit">Submit</button>
        </form>

        {this.state.showLogDisplay && (
          <LogDisplay
            key={this.state.totalTickets + this.state.ticketReleaseRate + this.state.customerRetrievalRate + this.state.maxTicketCapacity}
            totalTickets={this.state.totalTickets}
            ticketReleaseRate={this.state.ticketReleaseRate}
            customerRetrievalRate={this.state.customerRetrievalRate}
            maxTicketCapacity={this.state.maxTicketCapacity}
          />
        )}
      </>
    );
  }
}

export default ConfigurationForm;