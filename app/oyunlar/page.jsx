'use client';

import ClientOnly from "@/components/ClientOnly";
import GamePage from "@/components/Pages/Game/GamePage";

const Page = () => {
  return (
    <ClientOnly>
    <GamePage/>
    </ClientOnly>
  )
}

export default Page