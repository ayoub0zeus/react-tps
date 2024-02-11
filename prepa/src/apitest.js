import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Apitest() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://soccer-data.p.rapidapi.com/team/squad',
                params: { teamId: '803' },
                headers: {
                    'X-RapidAPI-Key': 'c4f388db6bmshec85fd6468c5153p1d78a6jsncb4194c45520',
                    'X-RapidAPI-Host': 'soccer-data.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setInfo(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <>
            {/* You can render or use the fetched 'info' state in your component as needed */}
        </>
    );
}
