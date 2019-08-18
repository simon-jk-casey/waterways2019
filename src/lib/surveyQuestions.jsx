export const surveyQuestions = [
  { 
    s: 1,
    n: 'a',
    q: 'What type of vegetation is along the stream side?',
    a: [
      {
        text: 'Trees with dense groundcover e.g, tussock, toetoe, ferns, flax, rushes.',
        score: 16 
      },
      {
        text: 'Tall grasses with patchy trees and groundcover',
        score: 8
      },
      {
        text: 'Patchy trees, groundcover grazed.',
        score: 4
      },
      {
        text: 'Grazed pasture grasses to stream edge.',
        score: 2
      }      ]
  },
  {
    s: 1,
    n: 'b',
    q: 'How continuous is the vegetation (other than pasture) in the riparian zone?  (Riparian Zone: "on or of the stream banks")',
    a: [
      {
        text: 'Tall vegetation/trees continuous or with a few small gaps.',
        score: 16
      },
      {
        text: 'Tall vegetation/trees less continuous, a few large gaps or several small gaps.',
        score: 8
      },
      {
        text: 'Breaks in tall vegetation/trees frequent - very patchy.',
        score: 4
      },
      {
        text: 'Many large gaps in tall vegetation/trees or no tall vegetation at all.',
        score: 2
      },
    ]
  },
  {
    s: 1,
    n: 'c',
    q: 'What is the average width of the vegetation (other than pasture) in the riparian zone?',
    a: [
      {
        text: '>30m',
        score: 32
      },
      {
        text: '10-30m',
        score: 16
      },
      {
        text: '1-10m',
        score: 8
      },
      {
        text: '0m',
        score: 4
      },
    ]
  },
  {
    s: 1,
    n: 'd',
    q: 'What % of the stream is shaded by plants and stream banks?',
    a: [
      {
        text: '50% or more.',
        score: 16
      },
      {
        text: '30%',
        score: 8
      },
      {
        text: '10%',
        score: 4
      },
      {
        text: 'Little or no shading.',
        score: 2
      },
    ]
  },
  {
    s: 1,
    n: 'e',
    q: ' How stable are the stream banks?',
    a: [
      {
        text: 'Banks stable, rock and soil firmly held by grasses, shrubs and tree roots.',
        score: 16
      },
      {
        text: 'Banks firm but loosely held by grass and shrubs.',
        score: 8
      },
      {
        text: 'Banks of loose soil held by a patchy layer of grass and shrubs.',
        score: 4
      },
      {
        text: 'Banks unstable, of loose soil or sand easily disturbed.',
        score: 2
      },
    ]
  },
  {
    s: 1,
    n: 'f',
    q: 'How bad is the erosion around or adjacent to your stream?',
    a: [
      {
        text: 'No evidence of erosion in surrounding land area, no scarring on stream banks, no undercutting.',
        score: 32
      },
      {
        text: 'Some erosion in surrounding land area.  Occasional scarring on stream banks and undercutting.',
        score: 16
      },
      {
        text: 'Moderate erosion in surrounding land area.  Eroding banks slowly widening.',
        score: 8
      },
      {
        text: 'Significant erosion in surrounding land area.  Significant areas of stream bank cut away, some loss of farmland.',
        score: 4
      }
    ]
  }
]
