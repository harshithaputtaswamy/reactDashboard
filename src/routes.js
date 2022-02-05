import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import DefaultLayout from './layouts/DefaultLayout'

const RouteWrapper = ({
  component: Component, 
  layout: Layout, 
  ...rest
}) =>{
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}


const Routes = () => {
	return (
		<Router>
			<Switch>
				<RouteWrapper exact path="/" component={Home} layout={DefaultLayout} />
			</Switch>
		</Router>
	)
}

export default Routes