import React from 'react'
import axios from 'axios'
import { List } from 'semantic-ui-react'
import moment from 'moment'


class DisplayTopic extends React.Component {
  state = {
    topics: [],
  }

  componentDidMount(){
    axios.get('/api/topics')
        .then(res => {
          this.setState({ topics: res.data})
        })
        .catch( err => {
          console.log(err.response)
        })
  }

  showTopic = () => {
    var currentDate = moment().format("YYYY-MM-DD")
    const {topics } = this.state

    return (
    
         topics.map( topic => {
          if (topic.date === currentDate)
          return(
           <List.Item key={topic.id}>
              <List.Header as="h3" style={{textAlign: "center", color: "white"}}>
               {topic.language}
              </List.Header>
              <List.Content as="h3"  style={{textAlign: "center", color: "white"}}>
               {topic.body}
              </List.Content>
            </List.Item>
          
          ) 
          else 
          return(
          <h1>Project Day!</h1>
//write a ternary to display Project Day or Have a good weekend
       )
      }
    )
   )
  }
       
  
  
  render() {
    return (
     <div>
      {this.showTopic()}
      </div>
    )
  }
}


export default DisplayTopic