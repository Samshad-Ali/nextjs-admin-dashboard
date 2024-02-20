"use client";
import { routes } from "@/utils/route";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { status } = useSession();
  const router = useRouter();
    
  useEffect(() => {
    if (status === "authenticated") {
      router.push(routes.home);
    }
  }, [status]);
  return (
    <div className="p-2 sm:p-4 flex items-center justify-center h-[80vh] text-base font-bold sm:text-3xl text-white uppercase">
      <p>user is unauthenticated Login first ☝️...!</p>
    </div>
  );
}
