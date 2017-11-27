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
    $.ajax({
      type: 'POST',
      url: `/relationships`,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        followed_id: this.props.user.id
      }),
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
      }
    }).then((response) => {
      const relationship = response
      this.setState({
        relationship
      })
    })
  }

  unfollow = () => {
    $.ajax({
      type: 'DELETE',
      url: `/relationships/${this.state.relationship.id}`,
      dataType: 'json',
      contentType: 'application/json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
      }
    }).then((response) => {
      this.setState({
        relationship: null
      })
    })
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
