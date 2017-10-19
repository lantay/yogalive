import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ name }) => {
    return (
        <div>
        <form action="/signup" method="POST" className="centered mt-10 ml-10 mr-10">
            <div className="form-group">
                <label className="form-label" htmlFor="firstname">First Name</label>
                <input className="form-input" type="text" name="firstname" id="firstname" />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="lastname">Last Name</label>
                <input className="form-input" type="text" name="lastname" id="lastname" />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-input" type="text" name="email" id="email" />
            </div>
            <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
        </div>
    );
};

Title.propTypes = {
    name: PropTypes.string,
};


export default Title;
