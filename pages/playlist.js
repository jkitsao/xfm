import React from "react";
import HelmetComp from "../components/helmet";

export default function catalogue({ data }) {
  return (
    <div className="">
      <HelmetComp data={data} />
      <div className="lg:w-3/4 lg:mx-auto">
        <iframe
          src="https://studio.xfm.co.ke/public/xfm.co.ke/ondemand/embed?theme=dark"
          frameBorder={0}
          allowTransparency="true"
          style={{ width: "100%", minHeight: 750, border: 0 }}
        />
      </div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  try {
    const res = await fetch(`https://studio.xfm.co.ke/api/nowplaying/xfm`);
    const data = await res.json();
    // Pass data to the page via props
    console.log({ nowplaying: data[0].now_playing.song });
    return { props: { data: data[0].now_playing.song } };
  } catch (error) {
    console.error(error);
    return error;
  }
  // console.log(data);
}
