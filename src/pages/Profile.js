import { useEffect } from "react";
import { useHistory } from "react-router";

const Profile = ({ login }) => {

   const history = useHistory();
    useEffect(() => {
        if(!login) {
            history.push('/about');
        }   
    }, [login, history]);

    return <h1>PROFILE PAGE</h1>;
};

export default Profile;
