class Store {
  constructor (reducer) {
    this.createStore(reducer)
  }
  createStore () {
    let state = null;
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
      state = this.reducer(state, action) // 覆盖原对象
      listeners.forEach((listener) => listener())
    }
    dispatch({})
    return { getState, dispatch, subscribe }
  }
}

export default Store