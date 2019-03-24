import CounterStore from "./CounterStore";

interface IAction {
    kind: string;
}

class Dispatcher {
    public dispatch(store: CounterStore, action: IAction) {
        switch (action.kind) {
            case "Increment": {
                store.increment();
                break;
            }
            default: break;
        }
    }
}

export default Dispatcher;
