import React, { Component } from "react"
import PropTypes from "prop-types"

export default class FollowButton extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      relationship: props.relationship
    }
  }
  
  follow = () => {
    
  }
  
  unfollow = () => {
    
  }

  render() {
    const isFollowing = this.state.relationship !== null

    return (
      <button onClick={ isFollowing ? this.unfollow : this.follow }>
        { isFollowing ? 'Unfollow' : 'Follow' }
      </button>
    )
  }
}

FollowButton.defaultProps = {
  relationship: null
}

FollowButton.propTypes = {
  user: PropTypes.object.isRequired,
  relationship: PropTypes.object
}
