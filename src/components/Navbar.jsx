// Copyright 2025 ariefsetyonugroho
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { useState, useEffect } from "react"

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="navbar py-7 flex items-center justify-between">
            <div className="logo">
                <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">Panzer Robotics</h1>
            </div>
            <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 md:top-0 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
                <li><a href="#beranda" className="sm:text-lg text-base font-medium">Beranda</a></li>
                <li><a href="#tentang" className="sm:text-lg text-base font-medium">Tentang</a></li>
                <li><a href="#layanan" className="sm:text-lg text-base font-medium">Layanan Kami</a></li>
                <li><a href="#blog" className="sm:text-lg text-base font-medium">Blog</a></li>
                <li><a href="#kontak" className="sm:text-lg text-base font-medium">Kontak</a></li>
            </ul>
        </div>
    )
}

export default Navbar