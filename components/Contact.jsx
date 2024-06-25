import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Contact = ({ name, profileImage, isOnline }) => {
    // État local pour gérer le statut en ligne/hors ligne
    const [onlineStatus, setOnlineStatus] = useState(isOnline);

    // Gestionnaire de clic pour basculer le statut en ligne/hors ligne
    const toggleOnlineStatus = () => {
        setOnlineStatus(!onlineStatus); // Inverse le statut actuel
    };

    return (
        <div className="contact">
            <div className="image-status">
                <img src={profileImage} alt="Photo de profile" />
                <span
                    className={`status ${onlineStatus ? 'online' : 'offline'}`}
                    onClick={toggleOnlineStatus} // Appeler la fonction lors du clic
                ></span>
            </div>
            <div className="contact-info">
                <h2>{name}</h2>
            </div>
        </div>
    );
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default Contact;
