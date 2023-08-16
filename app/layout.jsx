import Header from '@/components/UI & Layout/Header'
import './globals.css'
import { Exo_2 } from 'next/font/google'
import Container from '@/components/UI & Layout/Container'
import Sidebar from '@/components/UI & Layout/Sidebar'
import DiscountModal from '@/components/modals/DiscountModal'
import FirstBannerModal from '@/components/modals/FirstBannerModal'
import SecBannerModal from '@/components/modals/SecBannerModal'
import AddCategoryModal from '@/components/modals/AddCategoryModal'

const font = Exo_2({ subsets: ['latin']})

export const metadata = {
  title: 'Admin Panel',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={font.className}>
      <Header/>
      <Container>
      <Sidebar/>
      <DiscountModal/>
      <FirstBannerModal/>
      <SecBannerModal/>
      <AddCategoryModal/>
      <div className='h-[calc(100vh_-_106px)] overflow-y-auto p-[20px] w-full'>
        {children}
      </div>
      </Container>
      </body>
    </html>
  )
}
