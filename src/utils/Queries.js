import {gql} from 'apollo-boost'

const findTrip = gql`
  query findTrip(
    $fromLat: Float!
    $fromLon: Float!
    $toLat: Float!
    $toLon: Float!
  ) {
    plan(
      from: { lat: $fromLat, lon: $fromLon }
      to: { lat: $toLat, lon: $toLon }
    ) {
      itineraries {
        walkDistance
        duration
        legs {
          mode
          startTime
          endTime
          from {
            name
            stop {
              code
              name
              gtfsId
              stoptimesForPatterns(omitNonPickups: true, timeRange: 1800) {
                pattern {
                  code
                }
                stoptimes {
                  scheduledDeparture
                }
              }
            }
          }
          to {
            name
            stop {
              patterns {
                code
              }
            }
          }
          trip {
            gtfsId
            pattern {
              code
            }
            tripHeadsign
          }
        }
      }
    }
  }
`;

export default findTrip