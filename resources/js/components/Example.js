import React from 'react';
import ReactDOM from 'react-dom';
import ResponsiveDrawer from '../layouts/home';
import DocumentIdentity from '../pages/DocumentIdentity';


function Example() {
    return (
        <ResponsiveDrawer>
            <DocumentIdentity></DocumentIdentity>
        </ResponsiveDrawer>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
