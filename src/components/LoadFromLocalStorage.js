import React from 'react';

/**
 * This class only really exists to take advantage of the dispatch code so we can trigger
 * loading from localStorage. 
 */
class LoadFromLocalStorage extends React.Component {

    componentDidMount() {
        this.props.radarDispatch && this.props.radarDispatch({type:"loadFromLocalStorage"});
    }

    render() {
        return null;
    }
}

export default LoadFromLocalStorage;