import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} - ${siteConfig.primaryTitle}`;
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background: "#090b0c",
          color: "#f4f8f6",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: 72,
          width: "100%"
        }}
      >
        <div
          style={{
            border: "1px solid #2f9b90",
            borderRadius: 6,
            color: "#65c9bc",
            fontSize: 28,
            padding: "14px 18px"
          }}
        >
          GlyphKnit
        </div>
        <div>
          <div style={{ color: "#65c9bc", fontSize: 26, marginBottom: 18 }}>
            Senior SDET / ML Quality Engineer
          </div>
          <div style={{ fontSize: 72, lineHeight: 1.04, maxWidth: 940 }}>
            {siteConfig.name}
          </div>
          <div style={{ color: "#9ba9a6", fontSize: 34, marginTop: 22, maxWidth: 900 }}>
            Test automation, API validation, CI/CD testing, data validation, and MLOps quality.
          </div>
        </div>
      </div>
    ),
    size
  );
}
