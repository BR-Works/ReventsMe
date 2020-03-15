import React, { Component, Fragment } from "react";
import NavBar from "../../feature/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router";

import HomePage from "../../feature/home/HomePage";
import EventDetailedPage from "../../feature/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../feature/user/PeopleDashboard/PeopleDashboard";
import EventDashboard from "../../feature/event/EventDashboard/EventDashboard";
import UserDetailedPage from "../../feature/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../feature/user/Settings/SettingsDashboard";
import EventForm from "../../feature/event/EventForm/EventForm";
import TestComponent from "../../feature/testarea/TestComponent";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage} />
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              <NavBar />
              <Container className='main'>
                <Route path='/events' component={EventDashboard} />
                <Route path='/events/:id' component={EventDetailedPage} />
                <Route path='/people' component={PeopleDashboard} />
                <Route path='/profile/:id' component={UserDetailedPage} />
                <Route path='/settings' component={SettingsDashboard} />
                <Route path='/createEvent' component={EventForm} />
                <Route path='/test' component={TestComponent}/>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
