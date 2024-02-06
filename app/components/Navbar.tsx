"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";




export default function Navbar() {

    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;


    return (
        <div>
            <nav className="bg-gray-800 text-white p-4 my-2 rounded-lg max-w-[45rem] ">
                <ul className="flex justify-between">
                    <li>
                    <Link href="/Monitor" className={`hover:text-gray-200 hover:bg-black p-[22px] rounded-lg ${isActive('/Monitor') ? 'bg-blue-500' : ''}`}>Monitor</Link>
                    </li>
                    <li>
                        <Link href={'/Hardware'} className={`hover:text-gray-200 hover:bg-black p-[22px] rounded-lg ${isActive('/Hardware') ? 'bg-blue-500' : ''}`}>Hardware</Link>
                    </li>
                    <li>
                        <Link href={'/Pools'} className={`hover:text-gray-200 hover:bg-black p-[22px] rounded-lg ${isActive('/Pools') ? 'bg-blue-500' : ''}`}>Pools</Link>
                    </li>
                </ul>
            </nav>
        </div>








    );








}
































