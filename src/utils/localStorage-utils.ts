import { RootState } from "../bll/store";

export const loadState = () => {
  try {
    const maxValue = localStorage.getItem('maxValue');
    const minValue = localStorage.getItem('minValue');
    const count = localStorage.getItem('count');

    return {
      counter: {
        max: minValue ? JSON.parse(maxValue) : 5,
        min: minValue ? JSON.parse(minValue) : 0,
        count: count ? JSON.parse(count) : 0,
      }
    }
  } catch (err) {
    return undefined;
  }
}; 

export const saveState = (state: RootState) => {
  try {
    localStorage.setItem('maxValue', JSON.stringify(state.counter.max));
    localStorage.setItem('minValue', JSON.stringify(state.counter.min));
    localStorage.setItem('count', JSON.stringify(state.counter.count));
  } catch {
    // ignore write errors
  }
};

  // localStorage.setItem('startValue', JSON.stringify(store.getState().counter.minInputValue));