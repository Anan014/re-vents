import React, { Fragment } from 'react';
import { Route } from 'react-router';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashBoard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';
import './styles.css';

function App() {
  return (
    <Fragment>
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar />
          <Container className='main'>
            <Route exact path='/events' component={EventDashboard} />
            <Route exact path='/events/:id' component={EventDetailedPage} />
            <Route exact path={['/createEvent', '/manage/:id']} component={EventForm} />
          </Container>
        </>
      )} />
      {/* anthing that has forwardslash and anything else we eant to render it diffrently */}
      {/* if we hitting forwardslash and anything else we want to render what is inside this route/ */}
    </Fragment>
  );
}

export default App;
