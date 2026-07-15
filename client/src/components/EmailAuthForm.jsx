import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "../firebase.js";

export default function EmailAuthForm({ onSuccess, onError }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Enable persistence so user stays signed in
      await setPersistence(auth, browserLocalPersistence);

      if (isSignUp) {
        // Validation for signup
        if (password !== confirmPassword) {
          setError("Passwords don't match");
          setLoading(false);
          return;
        }
        if (password.length < 6) {
          setError("Password must be at least 6 characters");
          setLoading(false);
          return;
        }

        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // Sign in
        await signInWithEmailAndPassword(auth, email, password);
      }

      onSuccess();
    } catch (err) {
      const errorMsg = err.code === "auth/email-already-in-use"
        ? "Email already in use"
        : err.code === "auth/invalid-email"
        ? "Invalid email address"
        : err.code === "auth/user-not-found"
        ? "No account found with this email"
        : err.code === "auth/wrong-password"
        ? "Incorrect password"
        : err.message || "Authentication failed";

      setError(errorMsg);
      onError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <button
            type="button"
            onClick={() => {
              setIsSignUp(false);
              setError("");
              setPassword("");
              setConfirmPassword("");
            }}
            style={{
              flex: 1,
              padding: "8px 12px",
              fontSize: 13,
              fontWeight: 600,
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              background: !isSignUp ? "var(--text-primary)" : "rgba(255,255,255,0.08)",
              color: !isSignUp ? "#06070C" : "var(--text-secondary)",
              transition: "all 0.2s",
            }}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setIsSignUp(true);
              setError("");
              setPassword("");
              setConfirmPassword("");
            }}
            style={{
              flex: 1,
              padding: "8px 12px",
              fontSize: 13,
              fontWeight: 600,
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              background: isSignUp ? "var(--text-primary)" : "rgba(255,255,255,0.08)",
              color: isSignUp ? "#06070C" : "var(--text-secondary)",
              transition: "all 0.2s",
            }}
          >
            Sign Up
          </button>
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "11px 14px",
            fontSize: 14,
            border: "1px solid var(--border-color)",
            borderRadius: 8,
            background: "rgba(255,255,255,0.02)",
            color: "var(--text-primary)",
            fontFamily: "inherit",
            outline: "none",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--text-primary)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: "11px 14px",
            fontSize: 14,
            border: "1px solid var(--border-color)",
            borderRadius: 8,
            background: "rgba(255,255,255,0.02)",
            color: "var(--text-primary)",
            fontFamily: "inherit",
            outline: "none",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--text-primary)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
        />

        {isSignUp && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{
              padding: "11px 14px",
              fontSize: 14,
              border: "1px solid var(--border-color)",
              borderRadius: 8,
              background: "rgba(255,255,255,0.02)",
              color: "var(--text-primary)",
              fontFamily: "inherit",
              outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--text-primary)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
          />
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "11px 14px",
            fontSize: 14,
            fontWeight: 600,
            border: "none",
            borderRadius: 8,
            background: loading ? "rgba(108, 99, 255, 0.5)" : "#6C63FF",
            color: "#fff",
            cursor: loading ? "not-allowed" : "pointer",
            fontFamily: "inherit",
            transition: "background 0.2s",
          }}
        >
          {loading ? (isSignUp ? "Creating account..." : "Signing in...") : (isSignUp ? "Sign Up" : "Sign In")}
        </button>

        {error && (
          <p style={{ fontSize: 12, color: "#F43F5E", margin: "0", textAlign: "center" }}>
            ⚠️ {error}
          </p>
        )}
      </div>
    </form>
  );
}
