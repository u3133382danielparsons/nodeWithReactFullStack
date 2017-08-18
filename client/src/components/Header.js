import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">
              <FontAwesome name="google" size="2x" /> Login With Google
            </a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Donations: ${this.props.auth.credits}.00
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    const styles = {
      navBar: {
        background: '#cc0000'
      }
    };
    return (
      <nav style={styles.navBar}>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/posts' : '/'}
            className="left brand-logo"
          >
            Family History Seeker
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
