import React, { Component } from 'react';
import axios from 'axios'

const Articles = (props) => {
  const options = props.results.map((item)=>(
    <li className="stories-li">
      <a href={item.data.url}><h2>{item.data.title}</h2></a>
      <p>{item.data.selftext}</p>
    </li>
  ))
  return <ul className="stories-ul">{options}</ul>
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
      this.setState({
        articles: data.data.children
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
