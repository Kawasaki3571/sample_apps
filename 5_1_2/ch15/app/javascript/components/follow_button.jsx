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
    $.ajax({
      url: `/relationships`,
      dataType: 'json',
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify({
        followed_id: this.props.user.id
      }),
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
      },
      cache: false
    }).then((response) => {
      this.setState({
        relationship: response
      })
    })
  }
  
  unfollow = () => {
    $.ajax({
      url: `/relationships/${this.state.relationship.id}`,
      dataType: 'json',
      contentType: 'application/json',
      type: 'DELETE',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
      },
      cache: false
    }).then((response) => {
      this.setState({
        relationship: null
      })
    })
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