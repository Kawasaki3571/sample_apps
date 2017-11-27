import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FollowButton extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      relationship: props.relationship
    }
  }
  
  follow = () => {
    console.log('follow', this.props.user)
  }
  
  unfollow = () => {
    console.log('unfollow', this.props.relationship)
  }
  
  handleClickFollowButton = () => {
    if (this.state.relationship !== null) {
      this.unfollow()
    }
    else {
      this.follow()
    }
  }
  
  render() {
    let className = ''
    if (this.state.relationship !== null) {
      className += 'btn btn-danger'
    }
    else {
      className += 'btn btn-primary'
    }
    
    return (
      <div>
        <button className={ className } onClick={ this.handleClickFollowButton }>
          { this.state.relationship !== null ? 'Unfollow' : 'Follow' }
        </button>
      </div>
    )
  }
}

FollowButton.defaultProps = {
  relationship: null
}

FollowButton.propTypes = {
  relationship: PropTypes.object,
  user: PropTypes.object.isRequired
}