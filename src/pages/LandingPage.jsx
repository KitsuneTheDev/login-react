import { useUser } from "../context/UserContext.jsx";

export default function LandingPage() {
    const { user } = useUser();

    console.log(user);
    return;
}