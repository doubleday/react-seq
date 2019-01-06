import React, {} from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterStore from "./CounterStore";
import Dispatcher from "./Dispatcher";

const ctx : [CounterStore, Dispatcher] = [new CounterStore(), new Dispatcher()];

export const useDispatcher: () => [CounterStore, Dispatcher] =
    () => {
        return ctx;
    };

function App() {
    return (
        <div className={"App"}>
            <Counter />
        </div>
    );
}

export default App;
