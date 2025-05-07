# Failing version

<!-- WorkOS Support <support+id2367J6-4Y299@workos.zendesk.com> -->

This version runs `react-router` and fails to resolve modules:

```ts
import { UsersManagement, WorkOsWidgets } from '@workos-inc/widgets';
```

with the following error:

```
Cannot find module '/path/to/project/node_modules/@workos-inc/widgets/dist/esm/workos-widgets.client.js' imported from /path/to/project/node_modules/@workos-inc/widgets/dist/esm/index.js
    at finalizeResolution (node:internal/modules/esm/resolve:275:11)
    at moduleResolve (node:internal/modules/esm/resolve:860:10)
    at defaultResolve (node:internal/modules/esm/resolve:984:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:685:12)
    at ModuleLoader.#cachedDefaultResolve (node:internal/modules/esm/loader:634:25)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:617:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:273:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:135:49
```

The JWT doesn't matter for this example, because the module resolution prevents
the component from loading.

## Instructions

1. install dependencies and start vite dev server
```sh
# npm
npm install
npm run dev

# bun
bun install
bun dev
```

1. Navigate to http://localhost:5173 in browser
