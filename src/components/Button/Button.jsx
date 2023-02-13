import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoad } from './Button.styled';

export const Button = ({ text, type, onClick }) => {
    return (
        <ButtonLoad
            type={type}
            onClick={onClick}
        >
            {text}
        </ButtonLoad>
    )
};



Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};