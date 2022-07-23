import { Fragment } from "react";
import { Route } from "react-router";


export const HomeTemplate = (props) => {
    const {Component, ...restProps} = props;

    return <Route {...restProps} render={(propsRoute) => {

        return <Fragment>
            <h1 className="bg-black">Header homepage</h1>

            <Component {...propsRoute} />

            <footer className="bg-red">
                Footer
            </footer>
        </Fragment>
    }} />
}