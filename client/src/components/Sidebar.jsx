// client/src/components/Sidebar.jsx
import { categoryMeta } from "../styles/tokens.js";
import { SidebarProjectsSkeleton } from "./Skeleton.jsx";

export default function Sidebar({
  projects, loadingProjects, activeProject, onSelectProject, onNewProject,
  currentView, onSetView, user, onSignOut,
}) {
  const activeColor = activeProject
    ? categoryMeta[Object.keys(categoryMeta)[0]].color
    : "#6C63FF";

  return (
    <aside style={{
      width: 240, minWidth: 240, background: "var(--bg-sidebar)",
      borderRight: "1px solid var(--border-color)", display: "flex",
      flexDirection: "column", height: "100vh", position: "sticky",
      top: 0, overflow: "hidden",
    }}>
      {/* Logo */}
      <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid var(--border-color)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: "linear-gradient(135deg,#6C63FF,#43C6AC)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: 800, color: "#fff", flexShrink: 0,
          }}>F</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 800, color: "var(--text-primary)" }}>FounderKit</div>
            <div style={{ fontSize: 10, color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.5px" }}>THE FOUNDER OS</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: "12px 12px 8px" }}>
        {[
          { id: "dashboard", label: "Dashboard",  icon: "🏠" },
          { id: "tools",     label: "Tools",       icon: "🧰" },
          { id: "history",   label: "History",     icon: "🕐" },
        ].map(item => (
          <button key={item.id} onClick={() => onSetView(item.id)}
            style={{
              display: "flex", alignItems: "center", gap: 10, width: "100%",
              padding: "9px 12px", borderRadius: 8, border: "none", cursor: "pointer",
              background: currentView === item.id ? "rgba(108,99,255,0.15)" : "transparent",
              color: currentView === item.id ? "#fff" : "var(--text-secondary)",
              fontSize: 13, fontWeight: currentView === item.id ? 700 : 500,
              fontFamily: "inherit", textAlign: "left", marginBottom: 2,
              transition: "all 0.15s",
            }}>
            <span style={{ fontSize: 15 }}>{item.icon}</span>
            {item.label}
            {currentView === item.id && (
              <span style={{ marginLeft: "auto", width: 6, height: 6, borderRadius: "50%", background: "#6C63FF" }} />
            )}
          </button>
        ))}
      </nav>

      {/* Projects */}
      <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "16px 20px 8px", fontSize: 10, color: "var(--text-muted)", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
          Projects
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "0 12px" }}>
          {loadingProjects && projects.length === 0 && <SidebarProjectsSkeleton />}
          {projects.map((p) => (
            <button key={p.id} onClick={() => onSelectProject(p)}
              style={{
                display: "flex", alignItems: "center", gap: 10, width: "100%",
                padding: "9px 12px", borderRadius: 8, border: "none", cursor: "pointer",
                background: activeProject?.id === p.id ? "rgba(255,255,255,0.06)" : "transparent",
                color: activeProject?.id === p.id ? "var(--text-primary)" : "var(--text-secondary)",
                fontSize: 13, fontFamily: "inherit", textAlign: "left", marginBottom: 2,
                fontWeight: activeProject?.id === p.id ? 700 : 400, transition: "all 0.15s",
              }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
                background: activeProject?.id === p.id ? "#6C63FF" : "var(--text-muted)",
              }} />
              <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.name}</span>
            </button>
          ))}
          <button onClick={onNewProject}
            style={{
              display: "flex", alignItems: "center", gap: 10, width: "100%",
              padding: "9px 12px", borderRadius: 8, border: "1px dashed var(--border-color)",
              background: "transparent", color: "var(--text-muted)", cursor: "pointer",
              fontSize: 12, fontFamily: "inherit", textAlign: "left", marginTop: 8,
              transition: "all 0.15s",
            }}>
            + New Project
          </button>
        </div>
      </div>

      {/* User */}
      {user && (
        <div style={{ padding: "12px 16px", borderTop: "1px solid var(--border-color)", display: "flex", alignItems: "center", gap: 10 }}>
          {user.photoURL
            ? <img src={user.photoURL} alt="avatar" style={{ width: 30, height: 30, borderRadius: "50%", flexShrink: 0 }} />
            : <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#6C63FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#fff" }}>
                {(user.displayName || user.email || "?")[0].toUpperCase()}
              </div>
          }
          <div style={{ flex: 1, overflow: "hidden" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {user.displayName || user.email}
            </div>
            <div style={{ fontSize: 10, color: "var(--text-muted)" }}>Free plan</div>
          </div>
          <button onClick={onSignOut}
            style={{ background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: 13, padding: "4px" }}
            title="Sign out">↩</button>
        </div>
      )}
    </aside>
  );
}
