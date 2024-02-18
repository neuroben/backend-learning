import { NextRequest, NextResponse } from 'next/server'
import pool from '../../src/app/utils/database'
import { jwt } from 'jsonwebtoken';

export default async function register(req, res) {
    const post = req.body;
    const token = req.headers.authorization;
    const jwt = require('jsonwebtoken');

    if (req.method === 'POST') {
        // authenticate the user
        const token = req.headers.authorization.split(' ')[1];
        try {
            try {
                // if the token is valid, the user is authenticated
                const ell = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
                try {
                    console.log('post', req.body);
                    addPost = await pool.query('INSERT INTO posts (id, email, username, password, created_on, role, login_count, comment_count) VALUES (uuid_generate_v4(), $1, $2, $3, now(), $4, 0, 0)', [credentials.email, credentials.username, await argon2.hash(credentials.password), 'admin']);
                } catch (error) {
                    console.error('Error executing query', error.stack);
                    return res.status(500).json({ message: 'Internal server error' });

                }

            } catch (error) {
                console.log('baj van', error);
                return res.status(401).json({ message: 'Unauthorized' });
            }
        }
        catch (error) {
            console.error('Error executing query', error.stack);
            return res.status(500).json({ message: 'Internal server error' });
        }
        return 0;

    }
}
/*
function PostProvider({ children }) {
    const [post, setPost] = React.useState({
        id: '',
        slug: '',
        title: '',
        created_on: '',
        published_on: '',
        created_by: '',
        content: '',
        context: '',
        tags: [],
    });
    return (
        <PostContext.Provider value={{ post, setPost }}>
            {children}
        </PostContext.Provider>
    );
} // the post object to save the post*/