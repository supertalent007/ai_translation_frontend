import { useEffect, useRef } from 'react';

// ==============================|| ELEMENT REFERENCE HOOKS ||============================== //

const useScriptRef = () => {
  const scripted = useRef(true);

  useEffect(() => {
    scripted.current = false;
    return () => {
      console.log('Cleanup on unmount');
    };
  }, []);

  return scripted;
};

export default useScriptRef;
