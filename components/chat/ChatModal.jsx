import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import AblyChatComponent from './AblyChatComponent';

export default function ChatModal({setMessages,receivedMessages}) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Chat with Listeners online"
      >
        {/* Modal content */}
        <AblyChatComponent receivedMessages={receivedMessages} setMessages={setMessages} />
      </Modal>

    
        {/* <Button onClick={() => setOpened(true)}></Button> */}
        <section className='w-full py-3  flex justify-center items-center'>
        <button onClick={() => setOpened(true)} className='border-2 text-white border-blue-400 py-2 px-10 rounded-md text-sm '>
        Chat with other listeners
        </button>
        </section>
      
    </>
  );
}