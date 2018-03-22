import React, {Component} from 'react';

class Page extends Component {

  state = {
    title: '',
    content: ''
  };


  componentDidMount() {
    fetch('https://cryptoliho.io/wp-json/wp/v2/posts')
      .then(res => res.json())
      .then((result) => {
        this.setState({
          title: result[this.props.match.params.number].title.rendered,
          content: result[this.props.match.params.number].content.rendered
        })
      })
  }

  render() {
    return (
      <div className='container'>
        <div className='title'>
          {this.state.title}
        </div>
        <br/><br/><br/>
        <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
      </div>
    );
  }
}

export default Page;