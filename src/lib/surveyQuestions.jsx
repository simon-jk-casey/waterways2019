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
      }
    ]
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
  },
  {
    s: 2,
    n: 'a',
    q: 'What types of stream plants and mosses are there?',
    a: [
      {
        text: 'Stones either dull in colour or very bright.  Mosses may be present along edge and in pools.',
        score: 16
      },
      {
        text: 'Stones very slippery and dull in colour, with a brownish algae.  Long slimes and/or weeds present in summer.',
        score: 8
      },
      {
        text: 'Green and/or brown long slimes present and/or water cress & other weeds.',
        score: 4
      },
      {
        text: 'Stream choked with long green and/or brown slimes and/or large stream plants.',
        score: 2
      }
    ]
  },
  {
    s: 2,
    n: 'b',
    q: 'Are there any snags to slow the stream flow?',
    a: [
      {
        text: 'Rocks and old logs firmly set in place.',
        score: 16
      },
      {
        text: 'Rocks and logs back filled with sediment.',
        score: 8
      },
      {
        text: 'Rocks & logs loose, moving with floods.',
        score: 4
      },
      {
        text: 'No obstructions to slow stream flow.',
        score: 2
      }
    ]
  },
  {
    s: 2,
    n: 'c',
    q: 'How clear is the water? *Do not assess this category after a period of high rainfall',
    a: [
      {
        text: 'Water \'crystal\' clear.',
        score: 16
      },
      {
        text: 'Water slightly murky.',
        score: 8
      },
      {
        text: 'Water murky.',
        score: 4
      },
      {
        text: 'Water very muddy.',
        score: 2
      }
    ]
  },
  {
    s: 2,
    n: 'd',
    q: 'What bugs live in your stream?  Click HERE for some pictures of insects you might find.  *To find stream insects look under rocks.  Or on water weeds, grass, logs & other debris if you stream has no rocks.',  
    // ** popup/alert link in the question for images of insects?
    a: [
      {
        text: 'Lots of mayflies, stoneflies and other types of insects.',
        score: 16
      },
      {
        text: 'Moderate numbers of mayflies and caddisflies, other types of insects may also be found',
        score: 8
      },
      {
        text: 'Only a few insects found.  No mayflies or stoneflies but more than just worms and snails.',
        score: 4
      },
      {
        text: 'Worms and snails but not much else.  Or nothing found at all.',
        score: 2
      }
    ]
  },
  {
    s: 2,
    n: 'e',
    q: 'How often does your stream overtop its banks?',
    a: [
      {
        text: 'Never known to overtop banks.',
        score: 16
      },
      {
        text: 'Overbank flows rare.',
        score: 8
      },
      {
        text: 'Overbank flows occur during some winter storms.',
        score: 4
      },
      {
        text: 'Overbank flows frequent in winter/spring storms.  Or stream channelised and/or has stop banks.',
        score: 2
      }
    ]
  },
  {
    s: 3,
    n: 'a',
    q: 'Does stock have access to your stream? (Stock access can be prevented by fencing, trees, steep banks, etc.',
    a: [
      {
        text: 'Stock do not have access to any of the stream or its banks.',
        score: 32
      },
      {
        text: 'Stock only have access to a small part of the stream.',
        score: 16
      },
      {
        text: 'Stock have access to most of the stream.',
        score: 8
      },
      {
        text: 'Stock have access to the entire stream.',
        score: 4
      }
    ]
  },
  {
    s: 3,
    n: 'b',
    q: 'What is the potential for the input of sediment to your stream? (e.g. from stream banks, stock damage/trampling, stock crossings, surface runoff, runoff from farm roads, slips/erosion, gravel extraction, etc.).',
    a: [
      {
        text: 'No potential.',
        score: 32
      },
      {
        text: 'Low potential.',
        score: 16
      },
      {
        text: 'Moderate potential.',
        score: 8
      },
      {
        text: 'High potential.',
        score: 4
      }
    ]
  },
  {
    s: 3,
    n: 'c',
    q: 'What is the potential for the input of contaminants to your stream? (e.g. from spray drift, sprayer washings (sheep dips), effluent ponds, silage pits, dumps, oil and foam, dead animals, etc.).',
    a: [
      {
        text: 'No contamination.',
        score: 32
      },
      {
        text: 'Low contamination.',
        score: 16
      },
      {
        text: 'Moderate contamination.',
        score: 8
      },
      {
        text: 'High contamination.',
        score: 4
      }
    ]
  },
  {
    s: 3,
    n: 'd',
    q: 'Is there any artificial drainage entering the stream? (e.g. tile, mole, storm water and/or open drains which have the vegetation dredged).',
    a: [
      {
        text: 'No artificial drainage.',
        score: 32
      },
      {
        text: 'Sparse artificial drainage.',
        score: 16
      },
      {
        text: 'Moderate amount of drainage.',
        score: 8
      },
      {
        text: 'Extensive drainage networks.',
        score: 4
      }
    ]
  },
  {
    s: 3,
    n: 'e',
    q: 'How much fertiliser is used by yourself and neighbours?',
    a: [
      {
        text: 'No fertiliser used here or by neighbours.',
        score: 32
      },
      {
        text: 'Low rates.  Less than 150kg/ha of super (or equivalent), nitrogen fertilisers not used.',
        score: 16
      },
      {
        text: 'Moderate rates.  150-300kg/ha of super (or equivalent), low use of nitrogen fertilisers.',
        score: 8
      },
      {
        text: 'High rates. More than 300kg/ha of super (or equivalent), moderate use of nitrogen fertilisers.',
        score: 4
      }
    ]
  },
  {
    s: 4,
    n: 'a',
    q: 'What is the dominant land use 1km upstream?',
    a: [
      {
        text: 'Ungrazed native forest, wetlands abd/or tussock grasslands.',
        score: 32
      },
      {
        text: 'Disturbed native forest, wetlands and/or tussock grasslands.',
        score: 16
      },
      {
        text: 'Exotic forestry, and/or sheep farming and beef farming.',
        score:  8
      },
      {
        text: 'Intensive farming: dairy or red deer.  Cropping systems or urban land use.',
        score: 4
      }
    ]
  },
  {
    s: 4,
    n: 'b',
    q: 'What is the dominant land use here?',
    a: [
      {
        text: 'Ungrazed native forest, wetlands, and/or tussock grasslands.',
        score: 32
      },
      {
        text: 'Disturbed native forest, wetlands, and/or tussock grasslands.',
        score: 16
      },
      {
        text: 'Exotic forestry, and/or sheep and beef farming.',
        score: 8
      },
      {
        text: 'Intensive farming: dairy or red deers.  Cropping systems or urban land use.',
        score:  4
      },
    ]
  },
  {
    s: 4,
    n: 'c',
    q: 'What is the dominant type of stock in the area?',
    a: [
      {
        text: 'No stock.  Stream is not in pastoral land, or stock rarely grazed on surrounding land.',
        score: 32
      },
      {
        text: 'Sheep and/or goats.  Pests or feral animals may graze any remnant areas.',
        score: 16
      },
      {
        text: 'Intensive cattle farming (on easy country), or arable land.',
        score: 8
      },
      {
        text: 'Intensive dairy or deer farming, or cattle intensively managed on hill country.',
        score: 4
      }
    ]
  },
  {
    s: 4,
    n: 'd',
    q: 'What type of country does your stream flow through?',
    a: [
      {
        text: 'Hill/mountain country.',
        score: 16
      },
      {
        text: 'Rolling country.',
        score: 8
      },
      {
        text: 'Inland flat country.',
        score: 4
      },
      {
        text: 'Coastal country.',
        score: 2
      }
    ]
  },
  {
    s: 4,
    n: 'e',
    q: 'Are there any natural drainage pathways within 100m of you? (e.g. where runoff is directed into a gully or ephemeral tyoe channel and then into a stream - a large amount of runoff enters the stream at one point).',
    a: [
      {
        text: 'No natural drainage pathways within 100m.',
        score: 16
      },
      {
        text: '1 natural drainage pathway within 100m.',
        score: 8
      },
      {
        text: '2-3 natural drainage pathways within 100m.',
        score: 4
      },
      {
        text: '>3 natural drainage pathways within 100m.',
        score: 2
      }
    ]
  },
  {
    s: '5',
    n: 'a',
    q: 'How big is your strean?',
    a: [
      {
        text: 'Large lowland river, 15-100m wide.',
        score: 32
      },
      {
        text: 'Small river, 5-15m wide.',
        score: 16
      },
      {
        text: 'Medium stream, 2-5m wide.',
        score: 8
      },
      {
        text: 'Small stream, 0-2m wide.',
        score: 4
      }
    ]
  },
  {
    s: '5',
    n: 'b',
    q: 'How deeply incised are your stream banks?',
    a: [
      {
        text: 'Top of stream banks 10m or higher above stream.',
        score: 16
      },
      {
        text: 'Top of stream banks 10-5m above stream.',
        score: 8
      },
      {
        text: 'Top of stream banks 5-1m above stream.',
        score: 4
      },
      {
        text: 'Top of stream banks 1m or less above stream.',
        score: 2
      }
    ]
  },
  {
    s: '5',
    n: 'c',
    q: 'What is on the streambed?',
    a: [
      {
        text: 'Rocks & stones of different sizes, tightly packed together.',
        score: 16
      },
      {
        text: 'Stones, silt present in gaps between rocks/stones.',
        score: 8
      },
      {
        text: 'Gravel, sand and silt.',
        score: 4
      },
      {
        text: 'Sand and silt, stones absent.',
        score: 2
      }
    ]
  },
  {
    s: '5',
    n: 'd',
    q: 'How cohesive are the soils of the streambank?',
    a: [
      {
        text: 'Very cohesive.  Mostly rock & cemented material (boulders & bedrock).',
        score: 16
      },
      {
        text: 'Reasonably cohesive.  Tightly packed gravel or sand in a clayey matrix.',
        score: 8
      },
      {
        text: 'Loose soils with fine aggregates.  Tightly packed sands or gravels with some silt or clay.',
        score: 4
      },
      {
        text: 'Very loose soils.  Loosely packed sandy, gravelly or pumice material.',
        score: 2
      }
    ]
  },
  {
    s: '5',
    n: 'e',
    q: 'How well do your soils drain after rain?',
    a: [
      {
        text: 'Deep, well draining osils that slow down the recharge of water to waterways and drains.',
        score: 16
      },
      {
        text: 'Moderately well draining soils, but soils are water-logged for long periods in winter.',
        score: 8
      },
      {
        text: 'Excessively well draining soils - water moves freely through the soil, reaching waterways rapidly.  Sandy/porous soils.',
        score: 4
      },
      {
        text: 'Poorly draining soils.  Soils water-logged for long periods after rain, surface ponding occurs in areas.  Heavy textured soils.',
        score: 2
      }
    ]
  }
]
