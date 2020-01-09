import React from "react";
import PropTypes from "prop-types";

const UserProfile = ({ name, email, avatarUrl }) => (
    <>
        <div>{name}</div>
        <div>{email}</div>
        <div>{avatarUrl}</div>
    </>
);

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired
};

export default UserProfile;
