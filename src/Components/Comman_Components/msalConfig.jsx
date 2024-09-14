// src/components/msalConfig.js
import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "01f33dcc-e066-43eb-b0f9-7f8097c0c38c", // Replace with your client ID
    authority: "https://login.microsoftonline.com/tanmay631gmail.onmicrosoft.com",
    redirectUri: "http://localhost:5173", // Replace with your redirect URI
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set to true if you are having issues on IE11 or Edge
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export default msalInstance;
