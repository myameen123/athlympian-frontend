"use client";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";

function Page() {
  const [value, setValue] = useState();
  const router = useRouter();
  const handleJoinRoom = useCallback(() => {
    router.push(`/test/room/${value}`);
  }, [value]);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Room code"
      />
      <button onClick={handleJoinRoom}>Join</button>
    </div>
  );
}

export default Page;
