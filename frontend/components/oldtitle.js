import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ name }) => {

    // this is how we can legit do the form submit later when want to build it out https://stackoverflow.com/questions/27932923/react-js-show-a-message-on-and-after-form-submission
    return (
        <div className="container-fluid purple-background">
            <div className="simple-splash container-fluid">
                <div className="container-fluid " >
                    <h1 className="yogalive-title">YogAlive</h1>
                    <p>Create, foster, and experience the community of yoga in your studio, city, and world.</p>
                    <p>From your devices and in your life.</p>

                </div>
                <div className="container-fluid">
                    <form action="/signup" method="POST" className="centered mt-10 ml-10 mr-10">
                        <div className="form-group splash-form">
                            <label className="form-label" htmlFor="firstname">First Name</label>
                            <input className="form-input" type="text" name="firstName" id="firstname" />
                        </div>
                        {/* <div className="form-group">
                    <label className="form-label" htmlFor="lastname">Last Name</label>
                    <input className="form-input" type="text" name="lastname" id="lastname" />
                </div> */}
                        <div className="form-group splash-form">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input className="form-input" type="text" name="email" id="email" />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

Title.propTypes = {
    name: PropTypes.string,
};


export default Title;
