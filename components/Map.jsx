import { GoogleMap, useLoadScript, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState } from "react";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const options = {
  styles: [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
        {
          saturation: "-100",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36,
        },
        {
          color: "#000000",
        },
        {
          lightness: 40,
        },
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "off",
        },
        {
          color: "#000000",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 17,
        },
        {
          weight: 1.2,
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#4d6059",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4d6059",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#4d6059",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          lightness: 21,
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#4d6059",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4d6059",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#7f8d89",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#7f8d89",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#7f8d89",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#7f8d89",
        },
        {
          lightness: 29,
        },
        {
          weight: 0.2,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 18,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#7f8d89",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#7f8d89",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#7f8d89",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#7f8d89",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 19,
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#2b3638",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#2b3638",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#24282b",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#24282b",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ],
  disableDefaultUI: true,
};

let coordsTemp = [];

const Map = ({ center, zoom, list, place }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [pointCenter, setPointCenter] = useState({ lat: -33.867, lng: 151.195 });
  const [coords, setCoords] = useState([]);

  const sortedList = list.filter(
    (item) => item.attributes.place.data.attributes.city === place.data[0].attributes.city
  );

  const requestArr = sortedList.map((item) => {
    const keyword = item.attributes.search;
    return {
      query: keyword,
      fields: ["name", "geometry", "place_id"],
    };
  });

  const onMapLoad = (map) => {
    let service = new google.maps.places.PlacesService(map);

    for (var i = 0; i < requestArr.length; i++) {
      service.findPlaceFromQuery(requestArr[i], (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            coordsTemp.push(results[i]);
          }
          setPointCenter(results[0].geometry.location);
          setCoords(coordsTemp);
        }
      });
    }
  };

  return isLoaded ? (
    <div className="w-full h-full">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={pointCenter}
        zoom={zoom}
        options={options}
        onLoad={(map) => onMapLoad(map)}
      >
        {coords.map((results, i) => {
          // console.log(results);
          return <Marker key={i} position={results.geometry.location} label={results.name} />;
        })}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

Map.defaultProps = {
  center: {
    lat: 36.241626,
    lng: -41.364111,
  },
  zoom: 13,
};

export default Map;
