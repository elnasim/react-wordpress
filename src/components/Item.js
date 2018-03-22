import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Item extends Component {

  state = {
    img: '',
  };


  componentDidMount() {
    fetch(this.props.jsonLink)
      .then(res => res.json())
      .then((response) => {
        //console.log('--->',  response['source_url']);
        this.setState({
          img: response['source_url']
        })
      });
  }


  render() {

    const img = {backgroundImage: 'url(' + this.state.img + ')'};
    const link = '/' + this.props.link;

    return (
      <div className="column">
        <div className='item'>
          <Link to={link}>
            <div className="item__img" style={img}/>
          </Link>
          <Link to={link} className="item_title">{this.props.title}</Link>
          <div className="item_content" dangerouslySetInnerHTML={{__html: this.props.content}}></div>
        </div>
      </div>
    );
  }
}

export default Item;