"use client";
import React, { useEffect, useRef } from "react";

function Page({ params }) {
  const roomId = params.roomId;
  const elementRef = useRef(null);

  useEffect(() => {
    const setupMeeting = async () => {
      // Dynamically import ZegoUIKitPrebuilt only on the client side
      const { ZegoUIKitPrebuilt } = await import(
        "@zegocloud/zego-uikit-prebuilt"
      );

      const appID = 885404288;
      const serverSecret = "4d1e3b2c4758e74ed596fbdf0242dd2b";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "M yameen"
      );

      const zp = await ZegoUIKitPrebuilt.create(kitToken);

      if (elementRef.current) {
        await zp.joinRoom({
          container: elementRef.current,
          sharedLinks: [
            {
              name: "Copy Link",
              url: `http://localhost:3000/test/room/${roomId}`,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
          },
          showScreenSharingButton: false,
        });
      }
    };

    // Check if we are on the client side before executing the setup
    if (typeof window !== "undefined") {
      setupMeeting();
    }
  }, [roomId]);

  return <div ref={elementRef} />;
}

export default Page;
