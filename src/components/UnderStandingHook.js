import React, {useState} from "react";



function UnderStandingHook() {

    //let val = 10;

    var[val, setNewValue]=useState(15);

    const handleInreaseValue = () => {
        setNewValue(val+1);
        console.log(" increase val" + val++);
    }

    const handleDecreaseValue = () => {
        setNewValue(val-1);
        console.log(" increase val" + val++);
    }




    return (
        <>
            <button onClick={handleInreaseValue}>+</button>
            <p>{val}</p>
            <button onClick={handleDecreaseValue}>-</button>
        </>
    );




}
export default UnderStandingHook;