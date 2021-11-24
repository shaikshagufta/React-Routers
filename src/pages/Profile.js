import { useEffect } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Editprofile from "./Editprofile";
import ViewProfile from "./ViewProfile";

const Profile = ({ login }) => {

    const history = useHistory();
    useEffect(() => {
        if (!login) {
            history.push('/about');
        }
    }, [login, history]);
    //helps nest the components inside other components
    const { path, url } = useRouteMatch()

    return (
        <>

            <h1>PROFILE PAGE</h1>

            <ul>
                <li>
                    <Link to={`${url}/viewprofile`}>View Profile</Link>
                </li>
                <li>
                    <Link to={`${url}/editprofile`}>Edit Profile</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${path}/viewprofile`}component={ViewProfile} />
                <Route path={`${path}/editprofile`} component={Editprofile} />

            </Switch>
        </>
    );
};

export default Profile;
