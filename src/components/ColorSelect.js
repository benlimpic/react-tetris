import React from 'react'
import Select from 'react-select'

const ColorSelect = () => {
  const options = [
    { value: "Jack", label: "Jack", color: "#F94144" },
    { value: "John", label: "John", color: "#F9C74F" },
    { value: "Mike", label: "Mike", color: "#43AA8B" }
  ];

  const colorStyles = {
    control: (styles) => ({...styles, backgroundColor: 'white'}),
    option: (styles, { data, isDisabled, isFocused, isSelected}) => {
      return { ...styles, color: data.color }
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
      }
    },
    multiValueLabel: (styles, {data}) => {
      return {
        ...styles,
        color: "#fff"
      }
    },
    multiValueRemove: (styles, {data}) => {
      return {
        ...styles,
        color: "#fff",
        cursor: 'pointer',
        ':hover': {
          color: '#fff'
        }
      }
    }
  }

  const handleChange = selectedOption => {
    console.log("handleChange", selectedOption)
  };

  return (
  <Select 
    options={options} 
    onChange={handleChange}
    isMulti 
    styles={colorStyles} />
  );
};


export default ColorSelect