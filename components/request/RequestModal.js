import React, { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import Link from "next/link";
function RequestModal() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      {/* <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Find and Request your favourite song"
        size='xl'
      >
        {/* Modal content */}
      {/* <AblyChatComponent receivedMessages={receivedMessages} setMessages={setMessages} channel={channel} ably={ably}/> 
       <iframe src="https://radio.xfmradio.co.ke/public/xfmonline/embed-requests?theme=dark" frameBorder={0} allowTransparency="true" style={{width: '100%', minHeight: 550, border: 0}} />
      </Modal> */}
      {/* <Button onClick={() => setOpened(true)}></Button> */}
      <section className="w-full py-1  flex justify-center items-center">
        <button className="border-2 text-white border-red-700 bg-red-600/20 py-3 px-10 rounded-3xl text-sm ">
          <Link href="/playlist">Download from Playlist</Link>
        </button>
      </section>
    </>
  );
}

export default RequestModal;
