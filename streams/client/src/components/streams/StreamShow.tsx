import React from 'react';
import { fetchStream } from '../../actions';
import { connect } from 'react-redux';
import { MyProps, State } from '../../interfaces';




class StreamShow extends React.Component <MyProps> {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render(){

        if(!this.props.stream) {
            return <div></div>
        }
        const { stream } = this.props

        return (

            <div>
                <h1>{stream.title}</h1>
                <h5>{stream.description}</h5>
            </div>
        );
    }
}

const mapStateToProps = (state:State, ownProps:MyProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);