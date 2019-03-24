import React from "react";
import {observer} from "mobx-react-lite";
import {useDispatcher} from "../App";

interface IMyCounterProps {
    clickCount: number;
    onIncrement: () => void;
}

function MyCounter(props: IMyCounterProps) {
    return (
        <div className={"counter"}>
            <p>You clicked {props.clickCount} times</p>
            <button onClick={props.onIncrement}>Click me!</button>
        </div>
    );
}

const Counter = observer(() => {
    const [store, dispatcher] = useDispatcher();
    const onIncrement = () => dispatcher.dispatch(store, {kind: "Increment"});
    return (
        <MyCounter clickCount={store.currentCount} onIncrement={onIncrement} />
    );
});

export default Counter;
