const createAsyncMiddleware = () => ({ dispatch }) => next => (action) => {
  const { type, promise } = action;
  console.log(action);
  if (promise instanceof Promise) {
    dispatch({ type: `${type}_REQUESTED` });

    return promise.then(data => (
      dispatch({
        type: `${type}_SUCCESS`,
        data,
      })
    )).catch(error => (
      dispatch({
        type: `${type}_FAILURE`,
        error,
      })
    ));
  }

  return next(action);
};

export default createAsyncMiddleware();
