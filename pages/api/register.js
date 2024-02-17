import { NextRequest, NextResponse } from 'next/server'
import pool from '../../src/app/utils/database'
const argon2 = require('argon2'); // import argon2


export default async function register(req, res) {
    const credentials = req.body;

    console.log(`Email: ${credentials.email}`);
    console.log(`Password: ${credentials.password}`);

    if (req.method === 'POST') {
        let queryEmail;
        let queryUsername;
        let update;
        try {
            queryEmail = await pool.query('SELECT email FROM users WHERE email = $1', [credentials.email]);
            queryUsername = await pool.query('SELECT username FROM users WHERE username = $1', [credentials.username]);
            if (queryEmail.rows.length === 0 && queryUsername.rows.length === 0) {
                try {
                    update = await pool.query('INSERT INTO users (id, email, username, password, created_on, role, login_count, comment_count) VALUES (uuid_generate_v4(), $1, $2, $3, now(), $4, 0, 0)', [credentials.email, credentials.username, await argon2.hash(credentials.password), 'admin']);
                } catch (error) {
                    console.error('Error executing query', error.stack);
                    return res.status(500).json({ message: 'Internal server error' });

                }
                return res.status(200).json({ message: 'ok' });
            }
            else {
                if (queryEmail.rows.length !== 0) {
                    return res.status(401).json({ message: 'Email is already in use' });
                }
                else {
                    return res.status(401).json({ message: 'Username is already in use' });
                }
            }
        }
        catch (error) {
            console.error('Error executing query', error.stack);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

