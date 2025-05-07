# Working version

<!-- WorkOS Support <support+id2367J6-4Y299@workos.zendesk.com> -->

This version runs `vite` dev server with a React SPA configuration.

1. Follow instructions here: https://workos.com/docs/user-management/widgets to
generate a JWT the user management (user must have permissions). Making sure
CORS is configures to allow requests from http://localhost:5173

2. Set the env var
```sh
cp .env.example .env
# set value of WORKOS_JWT
```

3. install dependencies
```sh
# npm
npm install
npm run dev

# bun
bun install
bun dev
```

4. Navigate to http://localhost:5173 in browser
