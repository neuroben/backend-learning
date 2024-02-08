import { NextRequest, NextResponse } from 'next/server'
import pool from '../../src/app/utils/database'

export default async function users(req, res) {
    if (req.method === 'POST') {
        const result = await pool.query('SELECT password FROM users WHERE email = $1', [req.body.email]);

        if (result.rows.length === 0) {
            return res.status(401).json({message: 'Invalid email'});
        }

        if (req.body.email === 'kovacsbencearon+admin@protonmail.com'){
            res.status(200).json({message: 'Halihó'});
        }

       // res.status(200).json(req.body);
    }
}

