import { useEffect,useState } from "react";
import { supabase } from "../clientfile";

function GeometryDashFacesGallery() {
  const [faces,setfaces]=useState([])
useEffect(()=>{
  fetchdata()
},[])
const fetchdata =async ()=>{
  const {data}= await supabase.from("Geometry Dash Faces").select()
  setfaces(data)
}
  return (
    <>
      <>
        <div className="heading2">
          <h1>Your Dashers Faces!</h1>
          <p>View your dashers faces here!</p>
        </div>
    <img
          src="https://media.tenor.com/-3zOKC9Ldx0AAAAi/rotating-icon-gd.gif"
          className="Dasher"
        ></img>
    <div className="faces">
        {(faces.length>0)?faces.map(({Title,Color,speed})=>{
          return (
            <div className="face" style={{borderColor: Color}}>
              <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4bc8238a-57c9-470b-9cbf-f0ddda6065af/dfw3npn-976ebfab-884d-4886-9afa-38a3dba993b4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiYzgyMzhhLTU3YzktNDcwYi05Y2JmLWYwZGRkYTYwNjVhZlwvZGZ3M25wbi05NzZlYmZhYi04ODRkLTQ4ODYtOWFmYS0zOGEzZGJhOTkzYjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PWsv4ALdkUs0oGolPaoILiwd23gRvzSsh1mOs-TdhlA" alt="" />
              <h1>{Title}</h1>
              <p>{speed}</p>
            </div>
          )
          }):""
        }
        </div>
      </>
    </>
  );
}

export default GeometryDashFacesGallery;
