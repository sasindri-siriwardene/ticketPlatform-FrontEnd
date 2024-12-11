import React from 'react'

function ConfigurationForm() {
  constructor(props) ;{
    super(props)

    this.state = {
      totalTickets: ''
    }
  }
  handletotalTicketsChange = (event) => {
    this.setState({
      totalTickets: event.target.value


  return (
    
    <form>
      <div>
      <label>Enter Total Number Of Tickets:</label>
      <input
       type='number' 
        value={this.totalTickets} 
        onChange={this.handletotalTicketsChange}/>
      </div>

    </form>
  )
}

export default ConfigurationForm