import React, {Component} from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super();
        this.state = {
            hasError: false
        }
    };

    componentDidCatch(err, info) {
        this.setState({ hasError:true });
    };

    render() {
        if(this.state.hasError){
            return <h1>Ooops..</h1>
        }
        return this.props.children;
    };
};

export default ErrorBoundry;