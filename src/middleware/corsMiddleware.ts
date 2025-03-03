import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';


@Injectable()
export class CorsMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const origin = req.headers.origin as string || "https://gen-ai-blogs.netlify.app/";
        const domain = new URL(origin).hostname; // Extracting the domain from the origin
        console.log('domain:', domain);
        console.log('origin:', origin);

        if (origin.startsWith('http://localhost:3000') || origin.startsWith('http://localhost:3001') || origin.startsWith('http://localhost:5173') || origin.startsWith('https://gen-ai-blogs.netlify.app')) {
            res.header('Access-Control-Allow-Origin', origin);
        }

        res.header(
            'Access-Control-Allow-Methods',
            'GET, POST, PUT, DELETE, OPTIONS, PATCH',
        );
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        if (req.method === 'OPTIONS') {
            // Handle preflight requests
            res.status(200).end();
        } else {
            next();
        }
    }
}
