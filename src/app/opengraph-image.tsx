import { ImageResponse } from "next/og";

export const alt = "Rootbits - Criação de Sites Estratégicos que Convertem Visitantes em Clientes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          padding: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Rootbits
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgb(148, 163, 184)",
              textAlign: "center",
              maxWidth: 700,
              lineHeight: 1.4,
            }}
          >
            Criação de sites estratégicos que convertem visitantes em clientes
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 20,
              color: "rgb(56, 189, 248)",
            }}
          >
            Diagnóstico gratuito • Metodologia transparente
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
