import React from 'react';
import SubmitView from './SubmitView';
import ViewComplaints from './ViewComplaints';
import viewToggler from './viewToggler';

//get the state, view or submit, if view return the view, if submit, ret the sumit

function Section(props){

    if(props.view == "view"){
        return (
            <ViewComplaints />
        )
    }

    if(props.view == "submit"){
        return (
            <SubmitView />
        )
    }

}

export default Section;