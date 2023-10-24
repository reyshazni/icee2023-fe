import Image from "next/image";
import Link from "next/link";
import iceeLogo from "src/images/logos/icee_logo.svg"
import { NavLinks } from "./NavLinks";

export default function NavBar() {
    return (
        <>
            <div className="flex">
            <Link href="/" aria-label="Home">
                <Image src={iceeLogo} alt="ICEE Logo"/>

            </Link>

            <div className="flex">
                <NavLinks />
            </div>


            </div>
        </>
    );
}