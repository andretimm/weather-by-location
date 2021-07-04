import { CurrentPosition } from "../interfaces/CurrentPosition";
import { MAPBOX_URL } from "../utils/APIsURL";

export async function getLocation() {
  const position: CurrentPosition = await getPosition();
  return await getCurrentLocationData(position);
}
async function getPosition() {
  return new Promise<CurrentPosition>((resolve) =>
    navigator.geolocation.getCurrentPosition(function (data) {
      const position: CurrentPosition = {
        coords: {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude,
        },
        place: {
          country: "",
          name: "",
          state: "",
        },
      };
      resolve(position);
    })
  );
}

async function getCurrentLocationData(position: CurrentPosition) {
  const { latitude, longitude } = position.coords;
  const URL = `${MAPBOX_URL}${longitude}%2C${latitude}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}&autocomplete=false&types=place`;

  const placeData = await fetch(URL).then((data) => data.json());

  const place: CurrentPosition = {
    ...position,
    place: {
      country: placeData.features[0].context[1].text,
      name: placeData.features[0].text,
      state: placeData.features[0].context[0].text,
    },
  };
  return place;
}
