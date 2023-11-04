// import { Directus, MemoryStorage, Auth } from "@directus/sdk";
import { createDirectus, rest, authentication } from "@directus/sdk";
// import { randomBytes } from "crypto";
// import sessionstorage from "sessionstorage";

/* global LocalStorage */

// const isBrowser = typeof LocalStorage !== "undefined";

// Storage adapter where authentication state (token & expiration) is stored.
// const storage = isBrowser ? new LocalStorage() : sessionstorage;

const directus = createDirectus("https://backstage.birdbox.studio")
  .with(authentication())
  .with(rest());

module.exports = { directus };