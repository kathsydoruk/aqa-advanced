const axios = require('axios');

//#1
const fetchInvalidUrl = async () => {
    try {
        const response = await axios.get('http://www.google.com/404');
        return response.data;
    } catch (error) {
        if (error.response) {
            return `Error: Received status ${error.response.status}`;
        } else if (error.request) {
            return 'Error: No response received from server';
        } else {
            return `Error: ${error.message}`;
        }
    }
};

//#2

const fetchBookByIsbn = async (isbn) => {
    const url = 'https://demoqa.com/BookStore/v1/Book';

    const response = await axios.get(url, {
        headers: {
            'X-Client': 'QA-Training',
            Accept: 'application/json',
        },
        params: {
            ISBN: isbn,
        },
    });

    return response.data;
};

module.exports = { fetchInvalidUrl, fetchBookByIsbn };
