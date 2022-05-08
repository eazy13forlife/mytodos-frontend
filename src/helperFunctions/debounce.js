const debounceLeading = function (originalFunction, timer) {
  let timerId;

  return (...args) => {
    if (!timerId) {
      originalFunction.apply(this, args);
    }

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      timerId = undefined;
    }, timer);
  };
};

export default debounceLeading;
