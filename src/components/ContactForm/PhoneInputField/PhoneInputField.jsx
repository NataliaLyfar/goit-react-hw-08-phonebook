import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import PropTypes from 'prop-types';


export const PhoneInputField = (props) => {
  const {
    field: { name, value },
    form: { setFieldValue} ,
    country,
    onChange,
  } = props;
  
  const onValueChange = (phoneNumber, country, e) => {
    setFieldValue(name, phoneNumber);
    if (onChange !== null) {
      onChange(phoneNumber);
    }
  };

  return (
      <PhoneInput
        placeholder="Enter phone number"
        name={name}
        value={value}
        onChange={(e)=>onValueChange(e)}
        country={country}
        id="phoneInput"
      />
    );
  };
  
  PhoneInputField.propTypes = {
    form: PropTypes.any.isRequired,
    field: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    country: PropTypes.string,
  };
  
  PhoneInputField.defaultProps = {
    className: '',
    id: "phoneInput",
    label: '',
    onChange: null,
    country: 'AU',
    disabled: false,
  };