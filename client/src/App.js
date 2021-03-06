import React from "react";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Login from "./components/auth/Login";
import YTApp from "./components/youtube/YTApp";
import Events from "./components/calendar/Events";
import Grams from "./components/instagram/Grams";
// import Register from "./components/Register";
import Register from "./components/auth/Register";
import { Switch, Route } from "react-router-dom";
// import FetchUser from "./components/FetchUser";
import QuoteShow from "./components/quotes/AllQuotes"
import QuoteForm from './components/quotes/QuoteForm'
import DailyQuote from './components/quotes/DailyQuote'
import Twitter from './components/twitter/Twitter'
import AllTopics from "./components/Topics/AllTopics";
import TopicsForm from './components/Topics/TopicsForm';
import Weatherwidget from "./components/weather/Weatherwidget";




const App = () => (
  <>
    <Navbar/>
    
      
        <Switch>

          
          <Route exact path="/" component={Home} />
          <Route exact path="/youtube" component={YTApp} />
          <Route exact path="/calendar" component={Events} />
          <Route exact path="/twitter" component={Twitter} />
          <Route exact path="/weather" component={Weatherwidget} />
          <Route exact path="/instagram" component={Grams} />
          <Route exact path="/quotes" component={QuoteShow} />
          <Route exact path="/quotes/new" component={QuoteForm} />
          <Route exact path="/quotes/dailyquote" component={DailyQuote} />
          <Route exact path="/quotes/:id" component={DailyQuote} />
          <Route exact path="/quotes/:id/edit" component={QuoteForm} />
          <Route exact path="/quotes/:id/edit" render={props => <QuoteForm edit {...props} />} />
          <Route exact path="/topics" component={AllTopics} />
          <Route exact path="/topics/new" component={TopicsForm} />
          <Route exact path="/topics/:id/edit" component={TopicsForm} />
          <Route exact path="/topics/:id/edit" render={props => <TopicsForm edit {...props} /> } />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      
  




  </>


);

export default App;
