import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is Vinnie's About page</h2>
            <hr/>
            <User name={"Vinnie (function)"}/>
            <hr/>
            <UserClass/>
        </div>
    )
}
export default About;