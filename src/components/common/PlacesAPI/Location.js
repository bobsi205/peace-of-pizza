import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress
} from "react-places-autocomplete";
import { Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Location = props => {
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    props.addressValidation(results);
    props.setAddress(results[0].formatted_address);
    props.setFullAddress(results);
  };
  var size;
  React.useEffect(() => {
    // eslint-disable-next-line
    size = document.getElementById("address").getBoundingClientRect().width;
  });

  return (
    <PlacesAutocomplete
      value={props.address}
      onChange={props.setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <div style={{ position: "reletive" }}>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              id="address"
              type="text"
              className="flex-fill"
              required
              {...getInputProps({ placeholder: "Address" })}
            />
          </Form.Group>
          <div
            className="d-flex justify-content-center flex-column"
            style={{
              position: "absolute",
              width: size
            }}
          >
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
          <Form.Text className="text-muted">{props.errAddress}</Form.Text>
        </div>
      )}
    </PlacesAutocomplete>
  );
};
export default withRouter(Location);
