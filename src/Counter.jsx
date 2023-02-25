import { useState } from "react";

function initialSetup(){
    console.log('Inside InitialSetup');
    return 10;
}
const Counter = () => {
    
    const [counter, setCounter] = useState(initialSetup());

    function incrementCounter(){
        setCounter((prevState) => {
            return prevState + 1;
        });
    }

    function decrementCounter(){
        setCounter((prevState) => {
            return prevState - 1;
        });

        setCounter((prevState) => {
            return prevState - 1;
        });
    }

    return (
        <div className="col-12 col-md-2 offset-md-5 border  text-white">
            <span className="h2 pt-4 m-2 text-white-50">Fun Counter</span>
            <br/>
            <button className="btn btn-success m-1" onClick={incrementCounter}>+1</button>
            <button className="btn btn-danger m-1" onClick={decrementCounter}>-1</button>
            <span className="h4">
                Counter: &nbsp;
                <span className="text-success">{counter}</span>
            </span>
        </div>
    );
};

export default Counter;