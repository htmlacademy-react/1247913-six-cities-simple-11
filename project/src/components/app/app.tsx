import Main from '../../pages/main/main';
import { cityType } from '../../types';

type appProps = {
  data: cityType[];
}

function App({ data }: appProps): JSX.Element {
  return (
    <Main data={data} />

  );
}

export default App;
