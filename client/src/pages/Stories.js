import React, { Component } from 'react';
import axios from 'axios'

const Articles = (props) => {
  const options = props.results.map((item)=>(
    <div className="stories-in">
      <a href={item.data.url}><h2>{item.data.title}</h2></a>
      <p>{item.data.selftext}</p>
    </div>
  ))
  return <div className="stories-out">{options}</div>
}

class Stories extends Component{
  constructor(props){
    super(props)
    this.state = {
      articles: []
    }
  }

  render(){

  axios.get(`https://www.reddit.com/r/stopsmoking/new.json?sort=new`)
    .then(({data})=>{
      let array = data.data.children
      let filteredResults = array.filter((item) => !(item.data.selftext === ''))
      this.setState({
        articles: filteredResults
      })
    })

    return(
      <div>
        <h1>Stories From the StopSmoking Sub-Reddit</h1>
        <Articles results={this.state.articles} />
      </div>
    );
  }
}

export default Stories;
