import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Location = props => {
  const [address, setAddress] = React.useState("");
  const [, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.history.push("/order/stage-2");
  };
  return (
    <div className="mx-auto my-4" style={{ maxWidth: "720px" }}>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <Form onSubmit={e => handleSubmit(e)}>
              <Form.Group className="d-flex">
                <Form.Control
                  size="lg"
                  type="text"
                  className="flex-fill m-1"
                  required
                  {...getInputProps({ placeholder: "Where Do We Meet?" })}
                />

                <Button size="lg" type="submit" className="text-nowrap m-1">
                  Feed Me!
                </Button>
              </Form.Group>
            </Form>
            <div>
              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "var(--primary)" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
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
};
export default withRouter(Location);
