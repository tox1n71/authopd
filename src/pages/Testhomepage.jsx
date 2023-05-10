import {useAuth} from "../hook/useAuth";
import {useNavigate} from "react-router-dom";

const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    textAlign: "center",
};
const hue = {
    textAlign: "center",
    fontSize: "20px",
}

const TestHomePage = () => {
    const {signout} = useAuth();
    const navigate = useNavigate();
    return (
        <div>
            <h1 style={mystyle}>Home</h1>
            <p style={hue}>Welcome to the CumZone</p>
        </div>
    )
}

export {TestHomePage};