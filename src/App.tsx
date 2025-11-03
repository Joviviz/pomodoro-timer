import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('Oi');

  return (
    <>
      <Heading attr={123}>Ola mundo 1</Heading>
      <Heading>Ola mundo 2</Heading>
      <Heading>Ola mundo 3</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt
        consectetur a iusto sapiente voluptate nisi fugiat! Pariatur, iure
        molestiae molestias sit repellat veritatis, inventore non harum unde
        incidunt amet.
      </p>
    </>
  );
}
