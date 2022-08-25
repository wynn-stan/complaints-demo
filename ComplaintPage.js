import React from 'react';
import Header from "./Header";
import Nav from "./Nav";
import ViewComplaints from "./ViewComplaints";
import SubmitView from './SubmitView';

class ComplaintPage extends React.Component{

    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        return (
            <>
                <Header />
                <Nav />
                <SubmitView />
                <ViewComplaints />
            </>
        )
    }

}

export default ComplaintPage;