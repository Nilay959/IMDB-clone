import { useEffect } from "react";
import { useState } from 'react'

const LifeCycle = () => {


    const [counter,setCounter] = useState(0);



    function increaseCounter(){
        setCounter(counter+1);
    }


    useEffect(() => {
        setInterval(() => {
            setCounter((previousValue) => {
                return previousValue+1;
            })
        },1000);
        console.log("Componet Did Mount");
        return () => {
            console.log("Componet Did Unmount");
        }
    },[]);

    useEffect(() => {
        // increaseCounter();
        console.log("Component Did Update");
    });


    return(
        <div>
            <span>Count : {counter}</span>
            <h1>React LifeCycle</h1>
        </div>
    )
}

export default LifeCycle ;