import React from "react";

function catalogue() {
  return (
    <div className="p-2">
      <iframe
        src="https://dashboard.xfmradio.co.ke/public/xfm-online/ondemand/embed?theme=dark"
        frameBorder={0}
        allowTransparency="true"
        style={{ width: "100%", minHeight: 750, border: 0 }}
      />
    </div>
  );
}

export default catalogue;
