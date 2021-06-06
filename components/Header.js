

import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UsersIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ABOUT" Icon={UsersIcon} />
      </div>
      <img className="object-contain sm:border-none" width={200} height={100} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAkFBMVEUAAAAc54MjIyNaWlod7occ64UUekMPgkoWuGgDGg4ToVsd74cRi08b4oAb3n4LWTIJTSsb03cIIxIWl1QVrGENckEFLRka2XsACAQXvWse9osGNB0FKhgYxnAUpl4VsGQXmVQDFQwABgMNajwISCgKVjEHHQ8Qh0wHPiMLYDYYw28HPCIZznQRklMVfUQLRSZUENuRAAADOElEQVR4nO3bbV/aMBTG4XZLilBAqiAiKD6j+PT9v93mapuTLqVtrNq5//XO5nA09y8iTWPwAx4CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoLuG8yQzf2q9e2S6J2etd/9C50pn1KD17hvRfa/17l/oUIcZ3X5sPWW6E1ttxOaF2LwQmxdi80JsXojNC7F5ITYvxOaF2LwQm5f/JrbjfubYVX6RD/dv7YK+a8Qdmyy9tJrcipE2Z9k6Gdtimoy1yujR4+CmWL6N8/GTyBoZKTNyn110xxaKJhPZ4ygWTQ7an2x7RGyh1uKLP1/H855dvjAVamaNjM3r1H520R3byJTGdmzyh/lnYnPQKlnK8lqxxfVjU98zttclJ2dGbKnK2EIdivVGbKnq2EL9aMqJLVUjtjC+ysuJLVUnNr3Iy4ktVSe2UOflxJYqxvb2VNO+aD5dEVvKik2r8Tw1VvK6SYjYUtZdQnKdX5/MxYDaZJeJLWWttr4YWMnVNsyuEltK3sqvrRGZELEVlO+3TYmtHLF5ITYvxOaF2LwQm5d3xPZslcud7gab4tbTiqUp/7axiX2R327EjE0W7tjEwrS/Z0/G1ulHVw1jWztvuYLgIBED8V122R2bvG/T96bJSyiYXZcuahjbwLrDT6ZvFtaeicp7uGM7tYofsyZbsdbCcPQJk/fXMLbImlp+et7eaBrnPdyxnenqJnr7CZP31zC2Bys2N3Fv645tVqOJav9/S9rUMDbrfalEbD6ZuGM7rrGjrF4+fu7v0DS2TY2VYnqUHJ1ZV+Ymn5Z1UdPYgnHVlGPx61US26oytlj8ge2ixrFdVSw3nYgeZQe1oriiifWZsIMaxxYMd05Zj45Eben5tsHuJnPnKbEOaR5bEBUfbAlq9CBLy48FDuMdTZJO3yG88ogtWE21ck1aK3VmL5Mdpykf9lRJE334ITNt1flJfhAvtv9Rdi0O7xU/RPU3W3EMMDtGePq0KtRtRPe/3q5Ww1NHk23vouUpfoTJc5R5ts9O7ouRa8crlzezSLgrRvbqRfRw/m20m8yWnd72AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAISf8PALaY1KBHBDC9IAAAAASUVORK5CYII=" alt="" />
 
    </header>
  );
}

export default Header;