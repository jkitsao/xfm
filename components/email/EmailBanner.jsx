import React, { useState } from "react";

import { useDisclosure } from "@mantine/hooks";
import { Dialog, Group, Button, TextInput, Text } from "@mantine/core";
//Import necessary modules from the Directus SDK
// import { createDirectus, rest, createItem } from "@directus/sdk";
import { createDirectus, rest, createItem } from "@directus/sdk";
import { directus } from ".././../utils/directus";
import { showNotification } from "@mantine/notifications";
import { Loader } from "@mantine/core";
export default function EmailBanner() {
  const [opened, { toggle, close }] = useDisclosure(true);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  // Function to handle subscription
  const subscribe = async (collection_name, item_object) => {
    if (!email) return;
    try {
      setLoading(true);
      // Perform the subscription action using Directus SDK
      await directus.request(createItem(collection_name, item_object));
      localStorage.setItem("subscribed", "true");
      close();
      setLoading(false);
      return showNotification({
        title: " Cheers!. 🎉",
        message:
          " You have successfully subscribed. Welcome to our community!🚀 ",
        autoClose: 4000,
      });
    } catch (error) {
      console.error("Error subscribing:", error);
      // close();
      setLoading(false);
      return null;
    }
  };
  const collection_name = "xfm_email_list";
  const item_object = {
    // ... your item data ...
    email,
  };
  return (
    <>
      {/* <Group position="center">
        <Button onClick={toggle}>Toggle dialog</Button>
      </Group> */}

      <Dialog
        opened={opened}
        withCloseButton
        onClose={close}
        size="md"
        radius="md"
      >
        <Text size="sm" mb="xs" weight={500}>
          Get Notified When I Add New Music/Shows
        </Text>

        <Group align="flex-end">
          <TextInput
            type="email"
            required
            autoComplete="true"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="What's your email"
            sx={{ flex: 1 }}
          />
          <Button
            // type=" outline"
            variant="outline"
            size="sm"
            onChange={(e) => setEmail(e.target.value)}
            onClick={async () => await subscribe(collection_name, item_object)}
          >
            {!loading ? "Subscribe" : <Loader variant="dots" />}
          </Button>
        </Group>
      </Dialog>
    </>
  );
}
