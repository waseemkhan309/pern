const pool = require('../Database/Db');

const postData = async (req, res) => {
    const responses = req.body;
    try {
        // Loop through the array and insert each response into the database
        for (let response of responses) {
            const { question, selectedOption } = response;
            const correct = selectedOption === "Yes"; // Logic for correctness

            await pool.query(
                'INSERT INTO responses (question, selected_option, correct) VALUES ($1, $2, $3)',
                [question, selectedOption, correct]
            );
        }
        res.status(200).send({ message: 'Data saved successfully' });
    } catch (err) {
        console.error('Error saving responses:', err.message);
        res.status(500).send({ message: 'Error saving responses', error: err.message });
    }
}

const getData = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM responses');
        res.status(200).json(result.rows); // Send the results as JSON
    } catch (err) {
        console.error('Error fetching responses:', err.message);
        res.status(500).send({ message: 'Error fetching responses', error: err.message });
    }
}

module.exports = {
    getData,
    postData
}