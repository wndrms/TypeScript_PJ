import React, { useState } from 'react';
import axios from 'axios';

const TextToJson = () => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value);
    };

    const handleSaveButtonClick = async () => {
        const fileData = JSON.stringify({ text: inputText });
        try {
            const response = await axios.post('/api/save-json-file', {data: fileData});
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <textarea value={inputText} onChange={handleInputChange}/>
            <button onClick={handleSaveButtonClick}>Save as JSON</button>
        </div>
    )
}

export default TextToJson;