import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    //Get first name
    const firstName = profile.user.name.trim().split(" ")[0];

    return (
      <div class="row">
        <div class="col-md-12">
          <div class="card card-body bg-light mb-3">
            <h3 class="text-center text-info">{firstName}</h3>
            <p class="lead">
              {isEmpty(profile.bio) ? null : <span>{profile.bio}</span>}
            </p>
            <hr />
            <h3 class="text-center text-info">Skill Set</h3>
            <div class="row">
              <div class="d-flex flex-wrap justify-content-center align-items-center">
                <div class="p-3">
                  <i class="fa fa-check" /> HTML
                </div>
                <div class="p-3">
                  <i class="fa fa-check" /> CSS
                </div>
                <div class="p-3">
                  <i class="fa fa-check" /> JavaScript
                </div>
                <div class="p-3">
                  <i class="fa fa-check" /> Python
                </div>
                <div class="p-3">
                  <i class="fa fa-check" /> C#
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileAbout;
