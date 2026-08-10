import type { Species } from './types'
import { media } from './media'

export const species: Species[] = [
  {
    id: 'sea-turtle',
    name: 'Green sea turtle',
    scientificName: 'Chelonia mydas',
    plainDescription: 'Green sea turtles are large sea turtles with paddle-like flippers. Adults often graze on seagrass and algae in coastal habitats.',
    facts: [{ label: 'Diet shift', value: 'Young turtles eat a wider mix; many adults graze on seagrass and algae.' }, { label: 'Navigation', value: 'They make long migrations between feeding areas and nesting beaches.' }],
    image: media.greenTurtle,
    source: { label: 'NOAA Fisheries: Green sea turtle', url: 'https://www.fisheries.noaa.gov/species/green-turtle' },
  },
  {
    id: 'octopus',
    name: 'Common octopus',
    scientificName: 'Octopus vulgaris',
    plainDescription: 'A common octopus has eight flexible arms, a soft body and skin that can change color and texture to blend with a rocky seafloor.',
    facts: [{ label: 'Senses', value: 'Its arms use many suckers to touch and taste the world around it.' }, { label: 'Camouflage', value: 'Special skin cells help it shift color and pattern quickly.' }],
    image: media.commonOctopus,
    source: { label: 'Smithsonian Ocean: Cephalopods', url: 'https://ocean.si.edu/ocean-life/invertebrates/cephalopods' },
  },
  {
    id: 'clownfish',
    name: 'Common clownfish',
    scientificName: 'Amphiprion ocellaris',
    plainDescription: 'Common clownfish live among sea anemones on warm coral reefs. Their mucus layer helps protect them from the anemone’s stinging cells.',
    facts: [{ label: 'Home', value: 'Tropical Indo-Pacific coral reefs, close to host anemones.' }, { label: 'Partnership', value: 'The fish gains shelter while its activity can help its host anemone.' }],
    image: media.commonClownfish,
    source: { label: 'Smithsonian Ocean: Clownfish and sea anemones', url: 'https://ocean.si.edu/ocean-life/fish/clownfish-and-sea-anemones' },
  },
]

export const speciesById = (id: string) => species.find((animal) => animal.id === id)
