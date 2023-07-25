import React, { useEffect } from "react";

const PayPalDonate = () => {
  useEffect(() => {
    if (typeof window === "undefined" || typeof window.paypal === "undefined") {
      const script = document.createElement("script");
      script.src = "https://www.paypalobjects.com/donate/sdk/donate-sdk.js";
      script.charset = "UTF-8";
      script.async = true;
      script.onload = () => renderPayPalButton();
      document.getElementById("donate-button-container").appendChild(script);
    } else {
      renderPayPalButton();
    }
  }, []);

  const renderPayPalButton = () => {
    window.PayPal.Donation.Button({
      env: "production",
      hosted_button_id: "JQCADCQVA5QHY",
      image: {
        src: "https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif",
        alt: "Donate with PayPal button",
        title: "PayPal - The safer, easier way to pay online!",
      },
    }).render("#donate-button");
  };

  return (
    <div id="donate-button-container">
      <div id="donate-button"></div>
    </div>
  );
};

export default PayPalDonate;
