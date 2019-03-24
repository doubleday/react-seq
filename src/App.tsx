import React, {} from "react";
import "./App.css";
import Counter from "./components/Counter";
import Knob from "./components/Knob"
import CounterStore from "./CounterStore";
import Dispatcher from "./Dispatcher";

const ctx: [CounterStore, Dispatcher] = [new CounterStore(), new Dispatcher()];

export const useDispatcher: () => [CounterStore, Dispatcher] =
    () => {
        return ctx;
    };

function App() {
    let scale = 0.5;
    return (
        <div className={"App"} style={{transform: `scale(${scale},${scale})`}}>
            <Knob />
            <Knob />
        </div>
    );
}

export default App;
