import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
};

// A missing build-time env var makes getAuth() throw before React mounts,
// leaving a blank page. Fail with a readable message instead.
const missing = Object.entries(firebaseConfig)
  .filter(([, v]) => !v)
  .map(([k]) => "VITE_FIREBASE_" + k.replace(/([A-Z])/g, "_$1").toUpperCase());
if (missing.length > 0) {
  document.body.innerHTML =
    '<div style="font-family:sans-serif;color:#F8FAFC;background:#06070C;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;text-align:center">' +
    "<div><h2>Configuration error</h2><p>Missing environment variables at build time:</p><pre style='color:#F43F5E'>" +
    missing.join("\n") +
    "</pre><p>Add them in your hosting provider's settings and redeploy.</p></div></div>";
  throw new Error("Missing Firebase env vars: " + missing.join(", "));
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const appleProvider = new OAuthProvider("apple.com");
