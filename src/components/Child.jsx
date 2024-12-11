
import React from "react";


export function Child(props){
    const {msg, person}=props;
    
    return(

        <div>
             <h1>{msg}</h1>
        </div>

    );
   

}