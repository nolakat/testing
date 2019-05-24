import { useState } from 'react';
import useEventListener from '@use-it/event-listener';

const useMouseMove = () => {

    const [coords, setCoords] = useState([0 , 0]);

    useEventListener('mousemove', ({ clientX, clientY }) => {

      setCoords([clientX, clientY-15]);

    });

    return coords;
  };

  export default useMouseMove;