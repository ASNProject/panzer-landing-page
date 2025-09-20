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

import DataImage from "../data";

const Footer = () => {
  return (
    <div className='mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center'>
        <img src={DataImage.LogoImage} alt="Logo Image" className="w-10 rounded-md" loading="lazy" />
        <div className='flex gap-7'>
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#proyek">Proyek</a>
        </div>
        <div className='flex items-center gap-3'>
            <a href="https://github.com/ASNProject">
                <i className='ri-github-fill ri-2x'></i>
            </a>
            <a href="https://www.instagram.com/panzerrobotics/">
                <i className='ri-instagram-fill ri-2x'></i>
            </a>
            <a href="https://www.tiktok.com/@panzerrobotics">
                <i className='ri-tiktok-fill ri-2x'></i>
            </a>
            <a href="https://www.youtube.com/@panzerrobotics2296">
                <i className='ri-youtube-fill ri-2x'></i>
            </a>
        </div>
    </div>
  )
}

export default Footer