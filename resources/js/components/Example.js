import React from 'react';
import ReactDOM from 'react-dom';
import ResponsiveDrawer from '../layouts/home';

function Example() {
    return (
        <ResponsiveDrawer></ResponsiveDrawer>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
