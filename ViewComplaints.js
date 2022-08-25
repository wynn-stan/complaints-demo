import React from "react";
import ComplaintsTable from "./ComplaintsTable";

function ViewComplaints(){

    return (

        <>
            <section className="view-complaints-container">
                    <div className="view-complaints-container">
                        <h3>View All Complaints</h3>
                        <p>We Always Hear You</p>
                    </div>

                    <ComplaintsTable />

            </section>
        </>

    )

}

export default ViewComplaints;