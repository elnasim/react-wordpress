import React, {Component} from 'react';
import Item from "./Item";

class MainPage extends Component {

  state = {
    data: []
  };

  componentDidMount() {
    fetch('https://cryptoliho.io/wp-json/wp/v2/posts')
      .then(res => res.json())
      .then((result) => {
        this.setState({
          data: result
        })
      })
  }

  render() {

    const items = this.state.data.map((item, key) => {
      return <Item key={key} title={item.title.rendered} content={item.excerpt.rendered} jsonLink={item['_links']['wp:featuredmedia'][0].href} link={key}/>
    });

    return (
      <div className="App">
        <div className='content'>{items}</div>
      </div>
    );
  }
}

export default MainPage;