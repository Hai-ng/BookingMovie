import { Fragment } from "react";
import { Route } from "react-router";
import Header from "./Layout/Header/Header";


export const HomeTemplate = (props) => { //prop = path exact component
    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => {
        //props.location, props.history, props.match

        return <Fragment>
            <Header {...propsRoute} />

            <Component {...propsRoute} />

            <footer classname="bg-black text-white">
                Footerdsad
            </footer>

        </Fragment>
    }} />
}