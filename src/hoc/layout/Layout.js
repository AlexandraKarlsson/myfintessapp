import React from 'react';
import Aux from '../auxiliary/Auxiliary';
import Toolbar from '../../components/toolbar/Toolbar';

const layout = (props) => {
    return(
        <Aux>
            <Toolbar/>
            <main>{props.children}</main>
        </Aux>
    )
};

export default layout;