import darkLogo from "@/assets/logos/ekarigar_logo_dark_mode.svg";
import logo from "@/assets/logos/ekarigar_logo.svg";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-14 max-w-[10.847rem] ">
      <Image
        src={darkLogo}
        fill
        className="dark:hidden "
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
      />

      <Image
        src={darkLogo}
        fill
        className="hidden dark:block"
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
      />
    </div>
  );
}
