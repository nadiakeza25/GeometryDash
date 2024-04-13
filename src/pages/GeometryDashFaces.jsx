import { useState } from "react";
import { supabase } from "../clientfile";

function GeometryDashFaces () {
const [dasher,setdasher]=useState({Title:"",Speed:"",Color:""})
const createPost = async (event) => {
      try{
        await supabase
        .from("Geometry Dash Faces")
        .insert({
          Title: dasher.Title,
          speed: dasher.Speed,
          Color: dasher.Color,
        })
        .select();
      }
      catch (err){
        console.log(err)
      }
    };
    return (
      <>
     <div className="inpt">
      <input type="text" placeholder="name" onChange={(e)=>{
        setdasher({...dasher,Title:e.target.value})
      }} />
      <input type="text" placeholder="speed" onChange={(e)=>{
        setdasher({...dasher,Speed:e.target.value})
      }} />
      
      <select name="colors" id="color-pick" onChange={(e)=>{
         setdasher({...dasher,Color:e.target.value})
      }}>
        <option value="yellow">yellow</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        
      </select>
      <button onClick={createPost}>Save</button>
     </div>
      <img src="https://media.tenor.com/-3zOKC9Ldx0AAAAi/rotating-icon-gd.gif" className="Dasher"></img>
      </>
    );
}

export default GeometryDashFaces;