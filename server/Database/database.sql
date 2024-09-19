CREATE DATABASE postgres;

CREATE TABLE responses (
    id SERIAL PRIMARY KEY,
    question TEXT NOT NULL,
    selected_option TEXT NOT NULL,
    correct BOOLEAN NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
