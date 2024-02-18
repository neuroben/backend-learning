import { useEffect } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';


export function isLogged() {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('token');
        const verify = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log(err);
                router.push('/login');
            }
        });
    }, []);
}