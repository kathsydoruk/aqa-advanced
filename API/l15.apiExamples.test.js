const { fetchInvalidUrl } = require('./apiExamples');
const { fetchBookByIsbn } = require('./apiExamples');
jest.mock('axios');
const axios = require('axios');

describe('Lesson 15 HW examples', () => {
    test('#1 - HTTP error handling and appropriate message return', async () => {
        const result = await fetchInvalidUrl();

        expect(result).toMatch(/^Error:/);

        expect(
            result === 'Error: No response received from server' ||
                result.includes('Error: Received status') ||
                result.startsWith('Error:')
        ).toBe(true);
    });
    test('#2 - Custom headers and ISBN param in the request', async () => {
        const isbn = '9781449325862';

        axios.get.mockResolvedValue({
            data: { isbn, title: 'Some Title' },
        });

        await fetchBookByIsbn(isbn);
        const [url, config] = axios.get.mock.calls[0];
        expect(url).toBe('https://demoqa.com/BookStore/v1/Book');
        expect(config.headers).toEqual(
            expect.objectContaining({
                'X-Client': 'QA-Training',
                Accept: 'application/json',
            })
        );
        expect(config.params).toEqual(
            expect.objectContaining({
                ISBN: isbn,
            })
        );
    });
});
