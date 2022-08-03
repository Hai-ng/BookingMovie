import React from 'react'; 
import { Fragment } from "react";
import { Route } from "react-router";
import Footer from './Layout/Footer/Footer';
import Header from "./Layout/Header/Header";


// export default function HomeTemplate({Component, ...props}) {
//     return (
//         <Route {...props}
//          render={(propsComponent) => (
//             <Fragment>
//                  <Header {...propsComponent} />
//                  <HomeCarousel {...propsComponent} />

//                  <Component {...propsComponent} />
//             <footer classname="bg-black text-white">
//                  Footer
//             </footer>

//             </Fragment>
              
//           )}
//          />
//     )
// }


export const HomeTemplate = (props) => { //prop = path exact component
    const { Component, ...restProps } = props;

    return <Route {...restProps} render= {(propsRoute) => {
        //props.location, props.history, props.match
        console.log("restProps", restProps);

        return <Fragment>
            <Header {...propsRoute} />

            <Component {...propsRoute} />

            <Footer />
               
        </Fragment>
    }} />
}

