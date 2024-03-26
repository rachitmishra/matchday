"use client"
import { useRouter } from "next/navigation";
import { useAuth } from "../libs/firebase/auth-context";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const user = useAuth();
  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    }
  }, [user]);
  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};
