import React from 'react';
import '../css/CenteredTextComponent.css';

const CenteredTextComponent = ({ headerLevel, headerText, children }) => {
    const HeaderTag = headerLevel === 1 ? 'h1' : 'h2';

    return (
        <div className="centered-text-component">
            <HeaderTag>{headerText}</HeaderTag>
            <p>{children}</p>
        </div>
    );
};

export default CenteredTextComponent;