import React, { useState } from "react";
import "./modal.css";
import { Link } from 'react-router-dom';

export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <div className="modal">
                <div onClick={toggleModal} ></div>
                <div className="modal-content">
                    <div id="confirmation-container">
                        <div class="success-message">
                            <div class="success-message__icon">
                                <span><i class="far fa-check-circle"></i></span>
                            </div>
                            <div class="success-message__content">Thanks, your subscription has been confirmed. You've been
                                added to our list and will hear from us soon.</div>
                        </div>
                        <div class="success-message__arrow-icon">
                            <i class="fas fa-arrow-left"></i>
                            <Link to="/">
                                <p>&nbsp; Go back</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}