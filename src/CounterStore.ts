import {observable} from 'mobx'

class CounterStore {

    @observable
    currentCount: number = 0

    // constructor () {
    //   this.increment = this.increment.bind(this)
    // }

    increment() {
        this.currentCount++
    }
}

export default CounterStore
