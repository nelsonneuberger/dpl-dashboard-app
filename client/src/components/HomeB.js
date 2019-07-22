import React from "react"
import Quote from './quotes/RandQuote'
import YouTube from './youtube/YouTube'
import CalApp from './calendar/CalApp'
import Weatherwidget from "./weather/Weatherwidget";
import DisplayTweet from './twitter/DisplayTweet'
import {Grid, Responsive,  } from "semantic-ui-react"
import Clock from './Clock'
import Instagram from './instagram/Instagram'
import DisplayTopic from './Topics/DisplayTopic'
import '../App.css'

const CurrentDate = () => {
  var tempDate = new Date();
  var date = (tempDate.getMonth() + 1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear()
  const today = date;
  return (
   <div className= "Headers">{today}</div>
  );
}



const Home = () => (

<div style={{ overflowX: "hidden" }}>
<Responsive as={Grid} divided='vertically' style={{ height: '100vh', width: '100vw', position: "absolute" }} margin="0px">



    <Grid.Column width={3} style={{height: '100%'}} color="black" textAlign={"left"}>
      <CurrentDate />
      <br/>
      <CalApp />
    </Grid.Column>

    {/* <Grid.Column width={8} color="grey" >
      <div className="Headers" style={{textDecoration: "underline"}} >Todays Topic</div>
      <DisplayTopic />
      <br />
      <Quote />

    </Grid.Column>

    <Grid.Column textAlign={'center'} width={3} color="black">
      <Clock />
      
      <Weatherwidget />
    </Grid.Column> */}


  
    <Grid.Column width={3} color="black">
      
      <button style={{ position: "absolute", zIndex: "1000", left: "150px", opacity: "0.0", cursor: "pointer", padding: "40px 40px" }}
        onClick={<YouTube /> ? <YouTube/> : <Instagram /> } ></button>
    </Grid.Column>
    <Grid.Column width={11} color="black">
      <Instagram/>
    </Grid.Column>
  
</Responsive>
</div >
)

export default Home
