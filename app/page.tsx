export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <div style={{ maxWidth: "900px" }}>
        <h1
          style={{
            fontSize: "90px",
            marginBottom: "20px",
            letterSpacing: "-4px",
            fontWeight: 500,
          }}
        >
          Giebue
        </h1>

        <p
          style={{
            fontSize: "28px",
            color: "#555",
            lineHeight: "1.5",
          }}
        >
          The impenetrable privacy and encryption.
        </p>

        <p
          style={{
            marginTop: "50px",
            fontSize: "18px",
            color: "#888",
          }}
        >
          Coming Soon
        </p>
      </div>
    </main>
  );
}
