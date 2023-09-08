/* eslint-disable react-hooks/rules-of-hooks */
import Dashboard from '@/public/icons/dashboard.svg';
import Game from '@/public/icons/game.svg';
import Cart from '@/public/icons/cart.svg';
import Users from '@/public/icons/user.svg';
import Reviews from '@/public/icons/reviews.svg';
import Orders from '@/public/icons/orders.svg';
import Settings from '@/public/icons/settings.svg';
import Logout from '@/public/icons/logout.svg';
import Request from '@/public/icons/requests.svg';

const data = [
    {
      title: "Dashboard",
      href: "/",
      icon: <Dashboard />,
      color: '#Ff8431',
    },
    {
      title: "Oyunlar",
      href: "/oyunlar",
      icon: <Game />,
      color: "#2FAC66",
    },
    {
      title: "Değerlendirme",
      href: "/degerlendirmeler",
      icon: <Reviews />,
      color: "#FFCC00",
    },
    {
      title: "Kullancılar",
      href: "/kullanicilar",
      icon: <Users />,
      color: "#a03d3d",
    },
    {
      title: "Siparişler",
      href: "/siparisler",
      icon: <Orders />,
      color: "#e03636",
    },
    {
      title: "Sepet",
      href: "/sepet",
      icon: <Cart />,
      color: "#6DD432",
    },
    {
      title: "Ayarlar",
      href: "/ayarlar",
      icon: <Settings />,
      color: "#b6b6f8",
    },
    {
      title: "Destek",
      href: "/destek",
      icon: <Request />,
      color: "#a03d3d",
    },
    {
      title: "Çıkış Yap",
      href: null,
      icon: <Logout />,
      color: "#b6b6f8",
    },
  ];
  
  export default data;