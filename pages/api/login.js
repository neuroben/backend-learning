import { NextRequest, NextResponse } from 'next/server'
import pool from '../../src/app/utils/database'
const argon2 = require('argon2'); // import argon2


export default async function login(req, res) {
    const credentials = req.body;

    if (req.method === 'POST') {
        let query;
        try {
            query = await pool.query('SELECT * FROM users WHERE email = $1', [credentials.email]);
            if (query.rows.length === 0) {
                return res.status(401).json({ message: 'Invalid email' });
            }
            else {
                const user = query.rows[0];
                if (await argon2.verify(user.password, credentials.password)){
                    return res.status(200).json({ message: 'Success' });
                }
                else{
                    return res.status(401).json({ message: 'Invalid password' });
                }
            }
        }
        catch (error) {
            console.error('Error executing query', error.stack);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

