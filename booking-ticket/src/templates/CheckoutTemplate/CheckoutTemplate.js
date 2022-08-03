import React from 'react'; 
import { Fragment } from "react";
import { Redirect, Route } from "react-router";
import { USER_LOGIN } from '../../util/settings/config';

const CheckoutTemplate = (props) => { //prop = path exact component
    const { Component, ...restProps } = props;

    // if(!localStorage.getItem(USER_LOGIN)) {
    //     return <Redirect to='/login' />
    // }

    return <Route {...restProps} render= {(propsRoute) => {
        

        return <Fragment>
            {/* <Header {...propsRoute} /> */}

            <Component {...propsRoute} />

            {/* <Footer /> */}
               
        </Fragment>
    }} />
}

export default CheckoutTemplate;