# New Blog

Useing NextJS and type script
Using Prisma to connect sqlite DB

## Local development

Prequisites

- Docker
- NodeJS
- Set your `.env` for local dev to point to your local development database

1. Install dependencies `npm install`
1. Start your local Postgres database `docker compose up`
1. Initialize your local dev DB `npm run db:reset`
1. In a new window, run `npm run dev`
1. Access local dev environment at https://localhost:3000

## TODO

- [ ] show blog posts
- [ ] auth with crds
- [ ] auth with social ie apple/google
- [ ] contact form with email
