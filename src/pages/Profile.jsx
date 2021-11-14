import React from 'react';
import queryString from 'query-string';
import { useParams } from "react-router";

const Profile = () => {

    const params = useParams();
    const id = params.id;
    console.log(id, typeof id);

    return (
        <div>
            <p>Profile</p>
            { id && <p>id는 {id} 입니다. </p>}
        </div>
    );
};

export default Profile;
