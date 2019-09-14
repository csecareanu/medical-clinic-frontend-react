import React from 'react';

/* Adds the specified 'newProps' properties to 'WrappedComponent'  instance */
const withProps = (WrappedComponent, newProps) => {
    return props => (
        <WrappedComponent {...props} {...newProps} />
    );
};

export default withProps;