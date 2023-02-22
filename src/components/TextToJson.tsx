import React, { useState } from 'react';
import axios from 'axios';
import './TextToJson.css';

const TextToJson = () => {
    const [inputText, setInputText] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value);
    };

    const handleSaveButtonClick = async () => {
        const fileData = JSON.stringify({ text: inputText });
        setIsSaving(true);
        try {
            const response = await axios.post('/api/save-json-file', {data: fileData});
            console.log(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className='text-to-json-container'>
            <div className='textarea-container'>
                <textarea className='textarea' value={inputText} onChange={handleInputChange}/>
            </div>     
            <button className='button' onClick={handleSaveButtonClick} disabled={isSaving}>
                {isSaving ? 'Saving...' : 'Save as JSON'}
            </button>
        </div>
    )
}

export default TextToJson;