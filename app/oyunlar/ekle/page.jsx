'use client';

import ClientOnly from '@/components/ClientOnly';
import AddGame from '@/components/Pages/AddGame';

const page = () => {
  return (
    <ClientOnly>
    <AddGame/>
    </ClientOnly>
  )
}

export default page