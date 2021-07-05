import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Location from "./Location"
import { CurrentPosition } from '../interfaces/CurrentPosition'


test('loads and displays location infos', async () => {
    const location: CurrentPosition = {coords: {
        latitude: -26.8779,
        longitude: -48.6887,
      },
      place: {
        name: "Navegantes",
        state: 'Santa Catarina',
        country: 'Brazil'
      }};
  render(<Location place={location.place} />)

  expect(screen.getByRole('heading', {level:1})).toHaveTextContent('Navegantes');
  expect(screen.getByRole('heading', {level:2})).toHaveTextContent('Santa Catarina, Brazil');  
})