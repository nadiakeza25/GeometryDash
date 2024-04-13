import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
        
      <>
         
          <div className="SideNav">
          <Link to="/" style={{ color: "white" }}>
              Home
          </Link>
              <Link to="/GeometryDashFaces" style={{ color: "white" }}>
                  Geometry Dash Faces
              </Link>

              <Link to="/GeometryDashFacesGallery" style={{ color: "white" }}>
                  Geometry Dash Faces Gallery
              </Link>
      
          </div>
          
          </>



      
  );
}

export default NavBar;
         
          

