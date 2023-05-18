import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req) {
  const { searchParams } = req.nextUrl;
  // const username = searchParams.get("username");
  const title = searchParams.get("title");
  // const artist = searchParams.get("artist");
  const art = searchParams.get("art");
  // if (!artist || !title || !art) {
  //   return new ImageResponse(<>{'provide required information"'}</>, {
  //     width: 1200,
  //     height: 630,
  //   });
  // }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          color: "black",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          paddingTop: 50,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundImage: `url(${art})`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img
          alt="avatar"
          width="100%"
          src={`https://github.com/${username}.png`}
        /> */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "20px 50px",
            margin: "0 42px",
            fontSize: 40,
            width: "auto",
            maxWidth: 550,
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            lineHeight: 1.4,
            opacity: 0.9,
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
