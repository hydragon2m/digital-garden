import { ImageResponse } from "next/og";
import { seoData } from "../portfolio";

export const alt = "Do Quoc Huy - Software Engineer portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#fafafa",
          padding: "72px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: "#a1a1aa",
          }}
        >
          <span>{new URL(seoData.url).hostname}</span>
          <span>Portfolio</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              width: 96,
              height: 6,
              background: "#22d3ee",
              borderRadius: 999,
            }}
          />
          <h1
            style={{
              margin: 0,
              fontSize: 92,
              lineHeight: 1,
              letterSpacing: 0,
              fontWeight: 800,
            }}
          >
            Do Quoc Huy
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: 900,
              fontSize: 42,
              lineHeight: 1.25,
              color: "#e4e4e7",
              fontWeight: 600,
            }}
          >
            Software Engineer building reliable backend systems, microservices,
            and SSO security.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 14,
              color: "#d4d4d8",
              fontSize: 26,
            }}
          >
            <span>Microservices</span>
            <span>·</span>
            <span>SSO/OIDC/SAML</span>
            <span>·</span>
            <span>Database Optimization</span>
          </div>
          <div
            style={{
              display: "flex",
              padding: "16px 24px",
              borderRadius: 999,
              background: "#fafafa",
              color: "#09090b",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            View Portfolio
          </div>
        </div>
      </div>
    ),
    size
  );
}
