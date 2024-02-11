import React, { useState } from 'react';

function Input() {
    const [title, setTitle] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    const [gender, setGender] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const handleTextChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    }

    const handleRadioChange = (e) => {
        setGender(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Title submitted:", title);
        console.log("Selected value:", selectedValue);
        console.log("Selected gender:", gender);
    }

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleTextChange} />
                <button type="submit">Submit</button>
                <br />
                <select onChange={handleSelectChange}>
                    <option value="value1">value 1</option>
                    <option value="value2">value 2</option>
                    <option value="value3">value 3</option>
                </select>
                <br />
                Femme<input type="radio" name="Genre" value="Femme" checked={gender === "Femme"} onChange={handleRadioChange} />
                Men<input type="radio" name="Genre" value="Men" checked={gender === "Men"} onChange={handleRadioChange} />
                <br />
                <label>
                    Checkbox
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                </label>
            </form>
            <p>{title}</p>
            <p>Selected value: {selectedValue}</p>
            <p>Selected gender: {gender}</p>
            <p>checkbox: {isChecked ? 'Yes' : 'No'}</p>
        </React.Fragment>
    );
}

export default Input;
