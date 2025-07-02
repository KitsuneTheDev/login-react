import SignoutButton from "../components/SignoutButton.jsx";
import { useUser } from "../context/UserContext.jsx";

export default function Dashboard() {

    const { user } = useUser();

    console.log(user.user_metadata.firstName);
    
    return(
        <div className="dashboard--container w-fit h-fit flex flex-col items-center justify-center">
            <h2 className="text-4xl text-text text-center w-full">WELCOME <span className="text-background-primary">{user.user_metadata.firstName+ " " + user.user_metadata.lastName}</span></h2>
            <SignoutButton context={'Signout'} />
        </div>
    );
}