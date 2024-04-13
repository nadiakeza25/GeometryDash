import { Link } from "react-router-dom";


function HomePage() {
    return (
      <>
        <div className="homepage">
          <h1>Create Your Own Geometry Dash Character!</h1>
          <p>
            Here is where you can create your very own set of Geometry Dash
            Faces before doging the spikes and scary obsticles!{" "}
          </p>
          <img src="https://cdn.akamai.steamstatic.com/steam/apps/322170/capsule_616x353.jpg?t=1703006148"></img>
          
          <img src="https://media.tenor.com/-3zOKC9Ldx0AAAAi/rotating-icon-gd.gif" className="Dasher"></img>
        </div>
      </>
    );
}
export default HomePage;