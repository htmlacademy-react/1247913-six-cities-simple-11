import { cities } from '../../mocks/cities';
import { useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { changeActiveCity } from '../../store/action';
import {useAppDispatch} from '../../hooks';


function CitiesList(): JSX.Element {
  const activeCity = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();

  const handlerOnClickCity = (e: React.MouseEvent) => {
    const value = (e.target as HTMLElement).innerText;
    dispatch(changeActiveCity({activeCity: value }));
  };
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city.cityName}>
            <Link className={`locations__item-link tabs__item ${city.cityName === activeCity ? 'tabs__item--active' : ''}`} onClick={handlerOnClickCity} to={''} >
              <span>{city.cityName}</span>
            </Link>
          </li>
        ))}

      </ul>
    </section>
  );
}

export default CitiesList;


