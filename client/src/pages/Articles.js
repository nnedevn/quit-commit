import React, { Component } from 'react';
import Feed from 'rss-to-json';

const Artic = (props) => {
  const options = props.results.map((item)=>(
    <div className="articles-in">
      <a href={item.url}><h2>{item.title}</h2></a>
      <div dangerouslySetInnerHTML={{ __html: item.description }} />
    </div>
  ))
  return <div className="articles-out">{options}</div>
}

class Articles extends Component{
  constructor(props){
    super(props)
    this.state = {
      articles: []
    }
    this.loadData();
  }

  loadData = () => {
    let that = this;
    Feed.load('http://blog.quitstopnow.com/rss.xml', function(err, rss){
      that.setState({
        articles: rss.items
      })
    });
  }

  render(){
    return(
      <div>
        <h2>Articles page</h2>
        <Artic results={this.state.articles} />
      </div>
    );
  }
}

export default Articles;
