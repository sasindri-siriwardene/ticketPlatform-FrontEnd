# Ticket Platform Simulation

This project is a Ticket Platform Simulation built with React and Vite. It allows users to configure ticket parameters and view logs of the simulation.

## Project Structure
ticketPlatform/ <br>
├── .gitignore <br>
├── eslint.config.js <br>
├── index.html <br>
├── package.json <br>
├── public/ <br>
├── README.md <br>
├── src/ <br>
│ ├── App.css <br>
│ ├── App.jsx <br>
│ ├── assets/ <br>
│ ├── Components/ <br>
│ │ ├── ConfigurationForm.css <br>
│ │ ├── ConfigurationForm.jsx <br>
│ │ ├── ControlPanel.css <br>
│ │ ├── ControlPanel.jsx <br>
│ │ ├── LogDisplay.css <br>
│ │ ├── LogDisplay.jsx <br>
│ ├── index.css <br>
│ ├── main.jsx <br>
├── vite.config.js <br>



## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/sasindri-siriwardene/ticketPlatform.git
    ```
2. Navigate to the project directory:
    ```sh
    cd ticketPlatform
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Project

To start the development server, run:
```sh
npm run dev
```
### Project Components
*App.jsx*
The main component that renders the *ControlPanel*, *ConfigurationForm*, and *LogDisplay components*.

*ConfigurationForm.jsx*
A form that allows users to input ticket parameters such as total tickets, ticket release rate, customer retrieval rate, and maximum ticket capacity. It also handles form submission and displays the *LogDisplay* component based on the state.

*ControlPanel.jsx*
A component that provides control options for the simulation.

*LogDisplay.jsx*
A component that displays logs of the simulation based on the parameters provided in the ConfigurationForm.

### Styling
The project uses CSS for styling. The main styles are defined in the following files:

- App.css
- ConfigurationForm.css
- ControlPanel.css
- LogDisplay.css

### Technological Stack

- *React:* A JavaScript library for building user interfaces.
- *Vite:* A build tool that provides a faster and leaner development experience for modern web projects.
- *Node.js:* A JavaScript runtime built on Chrome's V8 JavaScript engine.
-* npm:* A package manager for JavaScript.
- *ESLint:* A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- *CSS:* A style sheet language used for describing the presentation of a document written in HTML or XML.
