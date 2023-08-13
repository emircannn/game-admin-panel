import Game from '@/public/icons/game.svg';
import Category from '@/public/icons/category.svg';
import Banner from '@/public/icons/banner.svg';
import Discount from '@/public/icons/discount.svg';
import Home from '@/public/icons/home.svg';

const gameData = [
    {
      title: "Oyunlar",
      href: "/oyunlar",
      icon: <Game />,
      color: "#2FAC66",
    },
    {
      title: "Kategori",
      href: "/oyunlar/kategori",
      icon: <Category />,
      color: "#f75821",
    },
    {
        title: "İndirim",
        href: "/oyunlar/indirim",
        icon: <Discount />,
        color: "#9d9dc9",
      },
      {
        title: "Banner",
        href: "/oyunlar/banner",
        icon: <Banner />,
        color: "#6DD432",
      },
      {
        title: "Ana Sayfa",
        href: "/",
        icon: <Home />,
        color: "#e03636",
      },
  ];
  
  export default gameData;