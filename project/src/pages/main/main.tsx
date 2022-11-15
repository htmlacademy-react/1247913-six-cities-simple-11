import OffersList from '../../components/offersList/offersList';
import CitiesList from '../../components/cities-list/cities-list';


function Main(): JSX.Element {

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList />
      </div>
      <OffersList />
    </main>
  );
}

export default Main;
