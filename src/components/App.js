import React, { useEffect, useState } from "react";

function App(){
    const [dogPic, setDogPic] = useState("")
    useEffect(() => 
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => setDogPic(data.message)), [])

    if(dogPic === ""){
        return <p>Loading...</p>
    }
    else{
        return <img src={dogPic} alt="A Random Dog"></img>
    }
}

export default App