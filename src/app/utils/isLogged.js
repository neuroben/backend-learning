import { useEffect } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';

// ha átadom ezt a funkció a kliens oldali kódnak akkor a tokenem
// látható lesz a böngésző konzolban, ezért nem adom át
// szóval ezt a funkciót át kell írni úgy, hogy a token ne legyen látható

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
    }, [router]);
}