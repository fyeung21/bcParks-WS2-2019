const stringifyAndReplace = jsonObject =>
  JSON.stringify(jsonObject).replace(/\"([^(\")"]+)\":/g, '$1:');

export const addMapMutation = (
  id,
  name,
  vicinity,
  photo_reference,
  plus_code,
  location,
  northeast,
  southwest,
) => `
  mutation {
    createMap(
      data: {
        externalId: "${id}"
        name: "${name}"
        vicinity: "${vicinity}"
        photo_reference: "${photo_reference}"
        plus_code: {
          create: ${stringifyAndReplace(plus_code)}
        }
        geometry: {
          create: {
            location: {create: ${stringifyAndReplace(location)}}
            viewport: {
              create: {
                northeast: {
                  create: ${stringifyAndReplace(northeast)}
                }
                southwest: {
                  create: ${stringifyAndReplace(southwest)}
                }
              }
            }
          }
        }
      }
    ) {
      id
      name
      externalId
      vicinity
      geometry {
        location {
          lat
          lng
        }
      }
    }
  }
`;
