import {useSelector} from 'react-redux';

export const HomeScreenModel = () => {
  const data = useSelector((state) => state.reducer.lessons);
  const latest = useSelector((state) => state.reducer.latest);

  return {data, latest};
};
