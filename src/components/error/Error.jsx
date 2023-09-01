import { useRouteError } from 'react-router-dom';
import Navigation from '../nav/Navigation';
import ErrorBackground from '../../assets/error.png'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <Navigation />
    <div style={{
      backgroundImage: `url(${ErrorBackground})`,
      backgroundRepeat: 'no-repeat',
      height: '90vh',
      backgroundPosition: '300px',
      backgroundSize: '2000px',
    }}></div>
    </>
  );
}