"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorsMiddleware = void 0;
const common_1 = require("@nestjs/common");
let CorsMiddleware = class CorsMiddleware {
    use(req, res, next) {
        const origin = req.headers.origin || "https://gen-ai-blogs.netlify.app/";
        const domain = new URL(origin).hostname;
        console.log('domain:', domain);
        console.log('origin:', origin);
        if (origin.startsWith('http://localhost:3000') || origin.startsWith('http://localhost:3001') || origin.startsWith('http://localhost:5173') || origin.startsWith('https://gen-ai-blogs.netlify.app')) {
            res.header('Access-Control-Allow-Origin', origin);
        }
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        if (req.method === 'OPTIONS') {
            res.status(200).end();
        }
        else {
            next();
        }
    }
};
exports.CorsMiddleware = CorsMiddleware;
exports.CorsMiddleware = CorsMiddleware = __decorate([
    (0, common_1.Injectable)()
], CorsMiddleware);
//# sourceMappingURL=corsMiddleware.js.map