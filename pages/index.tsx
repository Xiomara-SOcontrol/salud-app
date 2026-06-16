export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1 style={{ fontSize: 28, marginBottom: 20 }}>
        Sistema de Salud Ocupacional
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

        <a href="/medica" style={{ backgroundColor: "#4CAF50", color: "white", padding: 20, borderRadius: 10 }}>
          🩺 Atención Médica
        </a>

        <a href="/enfermeria" style={{ backgroundColor: "#2196F3", color: "white", padding: 20, borderRadius: 10 }}>
          💉 Enfermería
        </a>

        <a href="/examenes" style={{ backgroundColor: "#FF9800", color: "white", padding: 20, borderRadius: 10 }}>
          📋 Exámenes Periódicos
        </a>

        <a href="/emp" style={{ backgroundColor: "#9C27B0", color: "white", padding: 20, borderRadius: 10 }}>
          🏭 EMP
        </a>

      </div>
    </div>
  );
}
