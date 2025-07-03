import React from 'react';

class LoadFromStorage extends React.Component {

    componentDidMount() {
        this.props.radarDispatch && this.props.radarDispatch({type:"loadFromStorage"})
    }

    render() {
        return null;
    }
}

export default LoadFromStorage;