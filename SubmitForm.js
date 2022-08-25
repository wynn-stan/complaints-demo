import React from "react";

function SubmitForm(props){

    /**
     * The Form contains
     * Complaint
     * 
     */

    return (
        <>
            <form className="form" action="#" method="post">
                <textarea name="complaint" rows="10" cols="30" placeholder="Enter Complaint">
                </textarea>

                <button className="submitButton">Submit</button>
            </form>
        </>
    )

}



export default SubmitForm;