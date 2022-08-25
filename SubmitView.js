import React from "react";
import SubmitForm from "./SubmitForm"

function SubmitView(props){

    /**
     * Submit View has an image, 
     * a header text - Submit A complaint
     * a header description -  We always hear you
     */

    return (
        <>
            <section className="submit-view-container">
                    <div className="submit-view-header-container">
                        <h3>Submit A Complaint</h3>
                        <p>We Always Hear You</p>
                    </div>

                    <SubmitForm />
            </section>
        </>
    )

}

export default SubmitView;