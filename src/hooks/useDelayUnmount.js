import React, { useEffect, useState } from "react";

//hook that determines when a component will actually mount and unmount. mountIndicator tells us if we want the item mounted or not. shouldMount is what will be used to decide the actual mounting or delayed unmounting
const useDelayUnmount = (mountIndicator, delayTime) => {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    let timerId;

    //if mountIndicator says item should be mounted,but it hasnt actually been mounted onto the screen, set shouldMount to true
    if (mountIndicator && !shouldMount) {
      return setShouldMount(true);
    }

    //if mountIndicator says item should be unmounted but it's not yet taken off screen, after the delay time we provided, we want item to actually be unmounted by setting shouldMount to false.
    if (!mountIndicator && shouldMount) {
      timerId = setTimeout(() => {
        setShouldMount(false);
      }, delayTime);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [mountIndicator, delayTime, shouldMount]);

  return shouldMount;
};

export default useDelayUnmount;
