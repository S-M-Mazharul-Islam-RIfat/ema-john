import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const About = () => {
    // const { user } = useContext(AuthContext);
    return (
        <div>
            <h2>This is about components</h2>
            {/* <p>{user?.email}</p> */}
        </div>
    );
};

export default About;