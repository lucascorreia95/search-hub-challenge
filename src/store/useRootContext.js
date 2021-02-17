import { useContext } from 'react';
import Context from './Context';

export const useRootContext = () => useContext(Context);

export default useRootContext;
