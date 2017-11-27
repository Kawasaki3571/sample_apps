import React, { Component } from "react"
import PropTypes from "prop-types"

export default class FollowButton extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      relationship: props.relationship
    }
  }
  
  render() {
    return (
      <button>
        { this.state.relationship !== null ? 'Unfollow' : 'Follow' }
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
