import React from 'react';

async function getComplaintsData(){

    const query = `
        query {
            complaint {
                companyId
                complaint
                id
                source
                type
            }
        }
    `;

    const gqlApi = "https://test-demo-gql-backend.herokuapp.com/v1/graphql";

    const data = await fetch(gqlApi, {
        method: "POST",
        headers: {
            "Content-type":"application/json",
            "x-hasura-admin-secret": "SECRET"
        },
        body: JSON.stringify({query})
    })
    .then(
        (res) => {
            return res.json()
        }
    ).then(
        (data) => {
            return data.data.complaint;
        }
    )

    console.log(data);

    return data;

}

function ComplaintsTable(props){

    const data = getComplaintsData();


    return /*(

        <>
            {
                data.forEach(object => {
                    return <div className="complaint">object.complaint</div>
                })
            }
        </>

    )*/

}

export default ComplaintsTable;