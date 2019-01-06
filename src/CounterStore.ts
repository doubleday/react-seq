import {observable} from "mobx";

class CounterStore {

    @observable
    public currentCount: number = 0;

    public increment() {
        this.currentCount++;
    }
}

export default CounterStore;
