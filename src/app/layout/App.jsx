import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashBoard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import './styles.css';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Container className='main'>
        <EventDashboard />
      </Container>
    </Fragment>
  );
}

export default App;
