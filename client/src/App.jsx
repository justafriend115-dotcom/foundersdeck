// client/src/App.jsx — FounderKit v3 (The Founder OS)
import { useState, useEffect, useCallback } from "react";
import "./index.css";

// Firebase
import {
  auth, db, googleProvider, appleProvider,
} from "./firebase.js";
import {
  onAuthStateChanged, signInWithPopup, signOut,
} from "firebase/auth";
import {
  collection, doc, addDoc, getDocs, updateDoc, deleteDoc,
  serverTimestamp, query, orderBy,
} from "firebase/firestore";

// Styles
import { categoryMeta } from "./styles/tokens.js";

// Tool config
import { TOOLS } from "./tools/toolConfig.js";

// Layout components
import Sidebar        from "./components/Sidebar.jsx";
import Dashboard      from "./components/Dashboard.jsx";
import ToolGrid       from "./components/ToolGrid.jsx";
import AIToolView     from "./components/AIToolView.jsx";
import SessionHistory from "./components/SessionHistory.jsx";

// Calculators
import EquitySplitCalc    from "./calculators/EquitySplitCalc.jsx";
import CapTableCalc       from "./calculators/CapTableCalc.jsx";
import SAFECalc           from "./calculators/SAFECalc.jsx";
import UnitEconomicsCalc  from "./calculators/UnitEconomicsCalc.jsx";
import FundraisingTracker from "./calculators/FundraisingTracker.jsx";

// Modals
import NewProjectModal from "./components/modals/NewProjectModal.jsx";

// ─── DEMO MODE (localStorage) ────────────────────────────────────────────────

const DEMO_PROJECTS_KEY = "fk_projects";
const DEMO_SESSIONS_KEY = "fk_sessions";

const loadDemo = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
};
const saveDemo = (key, val) => localStorage.setItem(key, JSON.stringify(val));
const genId = () => Math.random().toString(36).slice(2);

// ─── CALCULATOR MAP ──────────────────────────────────────────────────────────

const CALC_COMPONENTS = {
  "equity-split":        EquitySplitCalc,
  "cap-table":           CapTableCalc,
  "safe-calculator":     SAFECalc,
  "unit-economics":      UnitEconomicsCalc,
  "fundraising-tracker": FundraisingTracker,
};

// ─── AUTH SCREEN ─────────────────────────────────────────────────────────────

function AuthScreen({ onGoogle, onApple, onDemo, authError }) {
  return (
    <div className="auth-container">
      <div style={{ width: 420, maxWidth: "95vw" }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 20, margin: "0 auto 16px",
            background: "linear-gradient(135deg,#6C63FF,#43C6AC)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 32, fontWeight: 900, color: "#fff",
          }}>F</div>
          <h1 style={{ fontSize: 28, fontWeight: 900, margin: "0 0 6px" }}>FounderKit</h1>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", margin: 0 }}>
            The all-in-one OS for startup founders
          </p>
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 32 }}>
          {["🚀 Pitch & Fundraise","⚖️ Legal","📣 Go-to-Market","👥 Team & Hiring","💰 Financial"].map(label => (
            <span key={label} style={{
              fontSize: 12, padding: "4px 12px", borderRadius: 99,
              background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-color)",
              color: "var(--text-secondary)", fontWeight: 600,
            }}>{label}</span>
          ))}
        </div>

        {/* Auth buttons */}
        <div className="glass-card" style={{ padding: 28 }}>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", textAlign: "center", marginBottom: 20 }}>
            Sign in to save your work across devices
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button className="btn-secondary" style={{ padding: "13px 20px", justifyContent: "flex-start", gap: 12, fontSize: 15, color: "var(--text-primary)", border: "1px solid var(--border-hover)" }} onClick={onGoogle}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M19.6 10.23c0-.68-.06-1.36-.18-2H10v3.79h5.41a4.62 4.62 0 01-2 3.04v2.52h3.23c1.89-1.74 2.98-4.3 2.98-7.35z" fill="#4285F4"/>
                <path d="M10 20c2.7 0 4.96-.9 6.62-2.42l-3.23-2.52c-.9.6-2.05.96-3.39.96-2.6 0-4.8-1.76-5.59-4.12H1.08v2.6A10 10 0 0010 20z" fill="#34A853"/>
                <path d="M4.41 11.9A5.97 5.97 0 014.1 10c0-.66.11-1.3.31-1.9V5.5H1.08A10 10 0 000 10c0 1.61.39 3.14 1.08 4.5l3.33-2.6z" fill="#FBBC05"/>
                <path d="M10 3.98c1.47 0 2.79.5 3.83 1.5L16.68 2.4C14.95.74 12.7-.01 10-.01A10 10 0 001.08 5.5l3.33 2.6C5.2 5.74 7.4 3.98 10 3.98z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <button className="btn-secondary" style={{ padding: "13px 20px", justifyContent: "flex-start", gap: 12, fontSize: 15, color: "var(--text-primary)" }} onClick={onApple}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M14.05 10.83c-.02-2.17 1.77-3.22 1.85-3.27-1.01-1.48-2.59-1.68-3.14-1.7-1.33-.14-2.6.78-3.27.78-.67 0-1.7-.76-2.8-.74C5.14 5.92 3.6 6.9 2.75 8.4c-1.74 3.01-.45 7.47 1.25 9.91.83 1.2 1.82 2.54 3.12 2.49 1.26-.05 1.73-.81 3.25-.81 1.52 0 1.95.81 3.28.79 1.35-.02 2.2-1.22 3.02-2.42.96-1.38 1.35-2.72 1.37-2.79-.03-.01-2.62-1-2.65-3.97l.21.23zm-2.44-7.25c.68-.82 1.14-1.97 1.01-3.11-.98.04-2.16.65-2.87 1.47-.63.73-1.18 1.9-1.03 3.02 1.09.08 2.21-.56 2.89-1.38z"/>
              </svg>
              Continue with Apple
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0" }}>
            <div style={{ flex: 1, height: 1, background: "var(--border-color)" }} />
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>or</span>
            <div style={{ flex: 1, height: 1, background: "var(--border-color)" }} />
          </div>

          <button className="btn-secondary" style={{ width: "100%", padding: "12px", color: "var(--text-secondary)" }} onClick={onDemo}>
            Try Demo Mode (no sign-in)
          </button>

          {authError && (
            <p style={{ fontSize: 12, color: "#F43F5E", marginTop: 12, textAlign: "center" }}>⚠️ {authError}</p>
          )}
        </div>

        <p style={{ fontSize: 11, color: "var(--text-muted)", textAlign: "center", marginTop: 16 }}>
          Your data is private and only accessible to you.
        </p>
      </div>
    </div>
  );
}

// ─── CALCULATOR VIEW WRAPPER ──────────────────────────────────────────────────

function CalcToolView({ tool, activeProject, onSave, onBack }) {
  const cat = categoryMeta[tool.category];
  const accent = cat?.color || "#6C63FF";
  const CalcComponent = CALC_COMPONENTS[tool.id];

  if (!CalcComponent) return <div>Calculator not found.</div>;

  const handleSave = async (calcData) => {
    await onSave({
      tool: tool.id,
      toolLabel: tool.label,
      category: tool.category,
      type: "calculator",
      formData: {},
      output: "",
      calcData,
    });
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 0 80px" }}>
      <button onClick={onBack}
        style={{ display: "flex", alignItems: "center", gap: 8, background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: 13, fontFamily: "inherit", marginBottom: 20, padding: 0 }}>
        ← Back to Tools
      </button>

      <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 28 }}>
        <div style={{ width: 52, height: 52, borderRadius: 14, background: accent + "20", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>
          {tool.icon}
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 11, color: accent, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              {cat?.icon} {cat?.label}
            </span>
            <span style={{ fontSize: 10, background: "rgba(67,198,172,0.15)", color: "#43C6AC", padding: "2px 8px", borderRadius: 99, fontWeight: 700 }}>🔢 Calculator</span>
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 6px", color: "var(--text-primary)" }}>{tool.label}</h2>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", margin: 0 }}>{tool.description}</p>
        </div>
      </div>

      <div className="glass-card" style={{ padding: 28 }}>
        <CalcComponent onSave={activeProject ? handleSave : () => alert("Create a project to save your results.")} />
      </div>

      {!activeProject && (
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 12, textAlign: "center" }}>
          Sign in or create a project to save your calculator results.
        </p>
      )}
    </div>
  );
}

// ─── SESSION VIEWER MODAL ─────────────────────────────────────────────────────

function SessionModal({ session, onClose }) {
  if (!session) return null;
  const tool = TOOLS.find((t) => t.id === session.tool);
  const cat  = categoryMeta[session.category];
  const ts   = session.createdAt?.seconds
    ? new Date(session.createdAt.seconds * 1000).toLocaleString()
    : "—";

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "flex-start", justifyContent: "center", zIndex: 200, padding: "40px 16px", overflowY: "auto" }}>
      <div className="glass-card" style={{ width: "100%", maxWidth: 800, padding: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 11, color: cat?.color || "#6C63FF", fontWeight: 700, marginBottom: 4 }}>{cat?.icon} {cat?.label}</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 4px" }}>{session.toolLabel || tool?.label}</h3>
            <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0 }}>Saved {ts}</p>
          </div>
          <button onClick={onClose} style={{ background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: 22, padding: "4px 8px" }}>✕</button>
        </div>

        {session.output && (
          <pre style={{ whiteSpace: "pre-wrap", fontSize: 13, lineHeight: 1.7, color: "var(--text-secondary)", fontFamily: "inherit", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", borderRadius: 10, padding: 20, maxHeight: 500, overflowY: "auto" }}>
            {session.output}
          </pre>
        )}

        {session.calcData && (
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", borderRadius: 10, padding: 20 }}>
            <pre style={{ fontSize: 12, color: "var(--text-secondary)", fontFamily: "monospace", whiteSpace: "pre-wrap" }}>
              {JSON.stringify(session.calcData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────

export default function App() {
  const [user, setUser]               = useState(null);
  const [isDemo, setIsDemo]           = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError]     = useState("");

  const [projects, setProjects]         = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [sessions, setSessions]         = useState([]);

  const [currentView, setCurrentView]   = useState("dashboard");
  const [activeTool, setActiveTool]     = useState(null);
  const [viewingSession, setViewingSession] = useState(null);

  const [showNewProject, setShowNewProject] = useState(false);
  const [loadingProjects, setLoadingProjects] = useState(false);

  // ── Auth listener ──────────────────────────────────────────────────────────
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return unsub;
  }, []);

  // ── Load projects ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (user) {
      loadFirestoreProjects();
    } else if (isDemo) {
      const p = loadDemo(DEMO_PROJECTS_KEY, []);
      setProjects(p);
      if (p.length > 0) setActiveProject(p[0]);
    }
  }, [user, isDemo]);

  const loadFirestoreProjects = async () => {
    setLoadingProjects(true);
    try {
      const snap = await getDocs(query(collection(db, "users", user.uid, "projects"), orderBy("createdAt", "desc")));
      const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setProjects(data);
      if (data.length > 0) setActiveProject(data[0]);
    } catch (e) { console.error(e); }
    finally { setLoadingProjects(false); }
  };

  // ── Load sessions for active project ──────────────────────────────────────
  useEffect(() => {
    if (!activeProject) { setSessions([]); return; }
    if (user) loadFirestoreSessions(activeProject.id);
    else loadDemoSessions(activeProject.id);
  }, [activeProject, user]);

  const loadFirestoreSessions = async (projectId) => {
    try {
      const snap = await getDocs(query(collection(db, "users", user.uid, "projects", projectId, "sessions"), orderBy("createdAt", "desc")));
      setSessions(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    } catch (e) { console.error(e); }
  };

  const loadDemoSessions = (projectId) => {
    const all = loadDemo(DEMO_SESSIONS_KEY, []);
    setSessions(all.filter((s) => s.projectId === projectId));
  };

  // ── Auth handlers ──────────────────────────────────────────────────────────
  const signInGoogle = async () => {
    setAuthError("");
    try { await signInWithPopup(auth, googleProvider); }
    catch (e) { setAuthError(e.message); }
  };
  const signInApple = async () => {
    setAuthError("");
    try { await signInWithPopup(auth, appleProvider); }
    catch (e) { setAuthError(e.message); }
  };
  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null); setIsDemo(false);
    setProjects([]); setActiveProject(null); setSessions([]);
    setCurrentView("dashboard"); setActiveTool(null);
  };
  const enterDemo = () => {
    setIsDemo(true);
    const p = loadDemo(DEMO_PROJECTS_KEY, []);
    if (p.length === 0) {
      const demo = { id: genId(), name: "Demo Project", industry: "SaaS", stage: "Seed" };
      saveDemo(DEMO_PROJECTS_KEY, [demo]);
      setProjects([demo]);
      setActiveProject(demo);
    } else {
      setProjects(p);
      setActiveProject(p[0]);
    }
  };

  // ── Project handlers ───────────────────────────────────────────────────────
  const createProject = async ({ name, industry }) => {
    if (user) {
      const ref = await addDoc(collection(db, "users", user.uid, "projects"), {
        name, industry, stage: "", createdAt: serverTimestamp(), updatedAt: serverTimestamp(),
      });
      const newP = { id: ref.id, name, industry };
      setProjects((p) => [newP, ...p]);
      setActiveProject(newP);
    } else {
      const newP = { id: genId(), name, industry };
      const updated = [newP, ...projects];
      saveDemo(DEMO_PROJECTS_KEY, updated);
      setProjects(updated);
      setActiveProject(newP);
    }
    setShowNewProject(false);
    setCurrentView("tools");
  };

  // ── Save session ───────────────────────────────────────────────────────────
  const saveSession = async (sessionData) => {
    if (!activeProject) return;
    if (user) {
      const ref = await addDoc(
        collection(db, "users", user.uid, "projects", activeProject.id, "sessions"),
        { ...sessionData, createdAt: serverTimestamp() }
      );
      const newSession = { id: ref.id, ...sessionData, createdAt: { seconds: Date.now() / 1000 } };
      setSessions((p) => [newSession, ...p]);
    } else {
      const all = loadDemo(DEMO_SESSIONS_KEY, []);
      const newSession = {
        id: genId(), projectId: activeProject.id,
        ...sessionData, createdAt: { seconds: Date.now() / 1000 },
      };
      const updated = [newSession, ...all];
      saveDemo(DEMO_SESSIONS_KEY, updated);
      setSessions((p) => [newSession, ...p]);
    }
  };

  // ── Delete session ─────────────────────────────────────────────────────────
  const deleteSession = async (session) => {
    if (!window.confirm("Delete this session?")) return;
    if (user && session.id) {
      await deleteDoc(doc(db, "users", user.uid, "projects", activeProject.id, "sessions", session.id));
    } else {
      const all = loadDemo(DEMO_SESSIONS_KEY, []);
      saveDemo(DEMO_SESSIONS_KEY, all.filter((s) => s.id !== session.id));
    }
    setSessions((p) => p.filter((s) => s.id !== session.id));
  };

  // ── Tool open ──────────────────────────────────────────────────────────────
  const openTool = (tool) => {
    setActiveTool(tool);
    setCurrentView("tool");
  };

  // ── Loading auth ───────────────────────────────────────────────────────────
  if (authLoading) {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", flexDirection: "column", gap: 16 }}>
        <div style={{ width: 40, height: 40, border: "3px solid rgba(108,99,255,0.2)", borderTopColor: "#6C63FF", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
        <p style={{ fontSize: 13 }}>Loading FounderKit…</p>
      </div>
    );
  }

  // ── Auth screen ────────────────────────────────────────────────────────────
  if (!user && !isDemo) {
    return <AuthScreen onGoogle={signInGoogle} onApple={signInApple} onDemo={enterDemo} authError={authError} />;
  }

  // ── Main App ───────────────────────────────────────────────────────────────
  const renderContent = () => {
    if (currentView === "tool" && activeTool) {
      if (activeTool.type === "calculator") {
        return (
          <CalcToolView
            tool={activeTool}
            activeProject={activeProject}
            onSave={saveSession}
            onBack={() => setCurrentView("tools")}
          />
        );
      }
      return (
        <AIToolView
          user={user}
          tool={activeTool}
          activeProject={activeProject}
          onSave={saveSession}
          onBack={() => setCurrentView("tools")}
        />
      );
    }
    if (currentView === "tools") {
      return <ToolGrid sessions={sessions} onSelectTool={openTool} />;
    }
    if (currentView === "history") {
      return (
        <SessionHistory
          sessions={sessions}
          onOpenSession={(s) => setViewingSession(s)}
          onDeleteSession={deleteSession}
        />
      );
    }
    // Dashboard (default)
    return (
      <Dashboard
        activeProject={activeProject}
        sessions={sessions}
        onOpenTool={openTool}
        onSetView={setCurrentView}
      />
    );
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar
        projects={projects}
        activeProject={activeProject}
        onSelectProject={(p) => { setActiveProject(p); setCurrentView("dashboard"); setActiveTool(null); }}
        onNewProject={() => setShowNewProject(true)}
        currentView={currentView}
        onSetView={(v) => { setCurrentView(v); setActiveTool(null); }}
        user={user || { displayName: "Demo User" }}
        onSignOut={handleSignOut}
      />

      <main style={{ flex: 1, overflowY: "auto", padding: "0 40px" }}>
        {loadingProjects ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "var(--text-muted)", fontSize: 13 }}>Loading projects…</div>
        ) : (
          renderContent()
        )}
      </main>

      {showNewProject && (
        <NewProjectModal
          onSave={createProject}
          onClose={() => setShowNewProject(false)}
        />
      )}

      {viewingSession && (
        <SessionModal
          session={viewingSession}
          onClose={() => setViewingSession(null)}
        />
      )}
    </div>
  );
}
