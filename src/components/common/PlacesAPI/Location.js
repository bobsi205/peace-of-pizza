import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress
} from "react-places-autocomplete";
import { Form, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Location = props => {
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    props.setAddress(results[0].formatted_address);
  };

  return (
    <PlacesAutocomplete
      value={props.address}
      onChange={props.setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <div>
          <Form.Group className="d-flex">
            <Form.Control
              size="lg"
              type="text"
              className="flex-fill m-1"
              required
              {...getInputProps({ placeholder: "Adress" })}
            />
          </Form.Group>
          <Container className="d-flex justify-content-center flex-column">
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
          </Container>
          <Form.Text className="text-muted">{props.errAddress}</Form.Text>
        </div>
      )}
    </PlacesAutocomplete>
  );
};
export default withRouter(Location);
