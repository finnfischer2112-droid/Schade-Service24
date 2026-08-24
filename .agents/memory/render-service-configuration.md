---
name: Render service configuration
description: Non-obvious behavior when changing a Render service from a static frontend process to a combined Node service.
---

Render can deploy a new commit while continuing to use the service's previously saved build and start configuration. A successful commit checkout or deploy label does not prove that `render.yaml` settings were applied; verify the live process command, generated build artifacts, and the service health response.

**Why:** The service initially rebuilt the frontend but still ran the old static server, and later started the new command without the API build artifact until the saved build command and database environment were corrected.

**How to apply:** For monorepos, confirm the Render service settings explicitly, ensure required runtime/build variables are present, and keep the previous API service until the new service returns its real API response and completes the critical user flow.