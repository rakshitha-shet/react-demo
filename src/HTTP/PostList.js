import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[],
         errorMsg: "error"
      }
    }

    componentDidMount(){
        //try "https://jsonplaceholder.typicode.com/posts1 for error"
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(result => {
            this.setState({post: result.data})
        })
        .catch(error => {
            this.setState({errorMsg: "error retriving data"})
        })
    }
  render() {
    return (
        <div>
            Post list
        { this.state.post.length && this.state.post.map(p => 
            (
                <div key={p.id}>{p.title}</div>
            ))
        }
        {this.state.errorMsg &&  <div> {this.state.errorMsg} </div>}
        </div>
    )
  }
}

export default PostList