import React, { Component } from "react"
import PropTypes from "prop-types"

export default class FollowButton extends Component {
  render() {
    return (
      <button>
        { this.props.relationship !== null ? 'Unfollow' : 'Follow' }
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
