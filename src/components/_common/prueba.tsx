

// We need to wrap component in `forwardRef` in order to gain
// access to the ref object that is assigned using the `ref` prop.

import { forwardRef, useImperativeHandle } from "react";

// This ref is passed as the second parameter to the function component.
const Child = forwardRef((props, ref) => {

  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({

    getAlert() {
      alert("getAlert from Child");
    }

  }));

  return null
});

export default Child