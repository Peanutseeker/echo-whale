import type { Species } from './types'

export const species: Species[] = [
  { id: 'sea-turtle', name: 'Sea turtle', plainDescription: 'Sea turtles are ancient ocean travellers. They use flippers like underwater wings.', facts: [{ label: 'Favourite food', value: 'Seagrass and jellyfish' }, { label: 'Superpower', value: 'Long migrations' }], image: '/images/reef-scene.png' },
  { id: 'octopus', name: 'Octopus', plainDescription: 'An octopus is a clever sea animal with eight arms and a soft body.', facts: [{ label: 'Favourite food', value: 'Crabs and clams' }, { label: 'Superpower', value: 'Camouflage' }], image: '/images/reef-scene.png' },
  { id: 'clownfish', name: 'Clownfish', plainDescription: 'Clownfish live among sea anemones and work together with them for shelter.', facts: [{ label: 'Home', value: 'Warm coral reefs' }, { label: 'Superpower', value: 'Living safely with anemones' }], image: '/images/reef-scene.png' },
]

export const speciesById = (id: string) => species.find((animal) => animal.id === id)
