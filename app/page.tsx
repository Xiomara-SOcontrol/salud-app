import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1 style={{ fontSize: 28, marginBottom: 20 }}>
        Sistema de Salud Ocupacional
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

        <Link href="/medica">
          <div style={{ backgroundColor: "#4CAF50", color: "white", padding: 20, borderRadius: 10 }}>
            🩺 Atención Médica
          </div>
        </Link>

        <Link href="/enfermeria">
          <div style={{ backgroundColor: "#2196F3", color: "white", padding: 20, borderRadius: 10 }}>
            💉 Enfermería
          </div>
        </Link>

        <Link href="/examenes">
          <div style={{ backgroundColor: "#FF9800", color: "white", padding: 20, borderRadius: 10 }}>
            📋 Exámenes Periódicos
          </div>
        </Link>

        <Link href="/emp">
          <div style={{ backgroundColor: "#9C27B0", color: "white", padding: 20, borderRadius: 10 }}>
            🏭 EMP
          </div>
        </Link>

      </div>
    </div>
  );
}
