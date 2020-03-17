import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { Form, Button, InputGroup } from "react-bootstrap";

export default function App() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>
            <Form
              className="mx-auto my-4"
              style={{ maxWidth: "720px" }}
              action="/order/stage-2"
            >
              <Form.Group className="d-flex">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Where Do We Meet?"
                  className="flex-grow-1 m-1"
                  required
                  {...getInputProps({ placeholder: "Type address" })}
                />

                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  className="text-nowrap m-1"
                >
                  Feed Me!
                </Button>
              </Form.Group>
            </Form>
            <div>
              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div
                    style={{ maxWidth: "720px" }}
                    {...getSuggestionItemProps(suggestion, { style })}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
