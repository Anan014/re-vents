import React, { Fragment, useState } from 'react';
import { Route } from 'react-router';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashBoard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';
import './styles.css';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <Fragment>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/events' component={EventDashboard}/>
        <Route exact path='/events/:id' component={EventDetailedPage}/>
        <Route exact path='/createEvent' component={EventForm}/>
      </Container>
    </Fragment>
  );
}

export default App;
