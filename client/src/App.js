import React from "react";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Login from "./components/auth/Login";
import YTApp from "./components/youtube/YTApp";
import Weather from "./components/Weather";
import CalApp from "./components/calendar/CalApp";
// import Register from "./components/Register";
import Register from "./components/auth/Register";
import { Switch, Route } from "react-router-dom";
import FetchUser from "./components/auth/FetchUser";
import QuoteShow from "./components/quotes/AllQuotes";
import QuoteForm from "./components/quotes/QuoteForm";
import DailyQuote from "./components/quotes/DailyQuote";
import Twitter from "./components/twitter/Twitter";
import AllTopics from "./components/Topics/AllTopics";
import TopicsForm from "./components/Topics/TopicsForm";
// import ProtectedRoute from "./components/ProtectedRoute";

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/youtube" component={YTApp} />
        <Route exact path="/weather" component={Weather} />
        {/* <ProtectedRoute exact path="/calendar" component={CalApp} /> */}
        <Route exact path="/calendar" component={CalApp} />
        <Route exact path="/twitter" component={Twitter} />
        <Route exact path="/quotes" component={QuoteShow} />
        <Route exact path="/quotes/new" component={QuoteForm} />
        <Route exact path="/quotes/dailyquote" component={DailyQuote} />
        <Route exact path="/quotes/:id" component={DailyQuote} />
        <Route exact path="/quotes/:id/edit" component={QuoteForm} />
        <Route
          exact
          path="/quotes/:id/edit"
          render={props => <QuoteForm edit {...props} />}
        />
        <Route exact path="/topic" component={AllTopics} />
        <Route exact path="/topics" component={AllTopics} />
        <Route exact path="/topics/new" component={TopicsForm} />
        {/* <Route exact path="/topics/:id/dailytopics" component={Topics} /> */}
        <Route exact path="/topics/:id/edit" component={TopicsForm} />
        <Route
          exact
          path="/topics/:id/edit"
          render={props => <TopicsForm edti {...props} />}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </>
);

export default App;
