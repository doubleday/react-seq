class Dispatcher {
  dispatch(store, action) {
    switch (action.type) {
      case 'Increment':
        store.increment()
        break
    }
  }
}

export default Dispatcher
