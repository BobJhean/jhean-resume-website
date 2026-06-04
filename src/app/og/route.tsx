import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "#0a0b0f",
          position: "relative",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Grid background dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(0,212,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow blobs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 60px 60px 70px",
            flex: 1,
            zIndex: 1,
          }}
        >
          {/* Available badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.3)",
              borderRadius: "100px",
              padding: "6px 16px",
              width: "fit-content",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#00d4ff",
              }}
            />
            <span
              style={{
                color: "#00d4ff",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Available for opportunities
            </span>
          </div>

          {/* Main heading */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: 1.0,
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ color: "#ffffff" }}>The</span>
            <span
              style={{
                background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Solutionist.
            </span>
          </div>

          {/* Name & title */}
          <div style={{ marginBottom: "8px" }}>
            <span style={{ color: "#ffffff", fontSize: "24px", fontWeight: 700 }}>
              Jhean Lamprecht
            </span>
          </div>
          <div style={{ marginBottom: "28px" }}>
            <span style={{ color: "#8892a4", fontSize: "18px" }}>
              Senior IT Manager & Digital Transformation Leader
            </span>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { value: "14+", label: "Years Experience" },
              { value: "99.9%", label: "Uptime Delivered" },
              { value: "40%", label: "DB Performance Gain" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "#12151e",
                  border: "1px solid #2a2f42",
                  borderRadius: "12px",
                  padding: "12px 18px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    background:
                      "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {s.value}
                </span>
                <span style={{ color: "#8892a4", fontSize: "12px", marginTop: "2px" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — profile photo placeholder with frame */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 70px 60px 20px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              border: "3px solid rgba(0,212,255,0.5)",
              background: "linear-gradient(135deg, rgba(0,212,255,0.1), rgba(124,58,237,0.1))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "80px",
            }}
          >
            👤
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            left: "70px",
            color: "#2a2f42",
            fontSize: "14px",
          }}
        >
          jhean-resume-website.vercel.app
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
