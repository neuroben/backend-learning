import { NextRequest, NextResponse } from 'next/server'
import pool from '../../src/app/utils/database'
import { jwt } from 'jsonwebtoken';


export default async function savePost(req, res) {
    const post = req.body;
    const token = req.headers.authorization[1];

    //console.log(post);
    //console.log(token);

    if (req.method === 'POST') {
        try {
            // itt azért még kéne egy ellenőrzés, hogy a token valóban a usernek a tokenje-e
            const query = {
                text: `INSERT INTO posts (id, slug, title, created_on, created_by, content, context, tags) VALUES ($1, $2, $3, now(), $4, $5, $6, $7)`,
                values: [post.id, post.slug, post.title, post.created_by, post.content, post.context, post.tags],
            };
            const result = await pool.query(query);
            res.status(200).json(result.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
