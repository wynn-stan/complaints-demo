import React from "react";
import ReactDOM from "react-dom";

import ComplaintPage from './ComplaintPage';


//create a view for adding complaints
// create a view for viewing complaints

/**
 * Use case, clients go to url of complaint page
 * header with company name and brand
 * side nav with two options, view all complaints, submit a complaint.
 * in the content section, svg image and Submit A Complaint, We always hear you/ View Complaints, We Always Hear you
 *  Create a hear
 * */

ReactDOM.render(
    <ComplaintPage />,
    document.querySelector('#root')
);