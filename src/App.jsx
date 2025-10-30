import DataImage, { listLayanan } from "./data";
import { listTools, listBlog } from "./data";
import Lottie from "lottie-react";
import animationData from "./components/animations/animation2.json";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 
import { Pagination, Navigation } from "swiper/modules"; 


function App() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const emailAddress = import.meta.env.VITE_EMAIL;
  return (
    <>
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.LogoImage} alt="Logo Image" className="w-10 rounded-md" loading="lazy" />
            <q>Kode yang indah, lahir dari ketekunan.</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-2">Hai, Kami Panzer Robotics</h1>
          <div className="flex flex-wrap gap-2">
              <p className="py-1 mb-6 px-3 border border-zinc-500 bg-zinc-600 rounded-md">
                <Typewriter
                  words={[
                    "Jasa Konsultasi",
                    "Proyek Kustom",
                    "Kecerdasan Buatan",
                    "Robotika",
                    "IoT & Otomatisasi",
                    "Website",
                    "Aplikasi Mobile"
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </p>
          </div>
          <p className="text-base/loose mb-6 opacity-50">
            Kami menghadirkan solusi teknologi berbasis mikrokontroler, kecerdasan buatan, robotika, IoT, Aplikasi Mobile dan Web untuk mendukung otomasi cerdas dan perkembangan industri masa depan.          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#kontak" className="bg-red-700 p-4 rounded-2xl hover:bg-red-600">
              Hubungi Kami <i className="ri-phone-line ri-lg"></i></a>
            <a  
                href="https://maps.app.goo.gl/k3LgkS4kYfcxR2yH8"
                target="_blank"
                rel="noopener noreferrer"
            className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
              Maps <i className="ri-map-pin-line ri-lg"></i></a>
          </div>
        </div>
        <Lottie animationData={animationData} loop autoplay className="animate__animated animate__fadeInUp"/>
      </div>
      
      {/* Tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={ DataImage.LogoImage } alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
          <p className="text-base/loose mb-4 text-justify">
            Panzer Robotics adalah tim pengembang teknologi yang berfokus pada Mikrokontroler, Kecerdasan Buatan (AI), Robotika, Internet of Things (IoT), Aplikasi Mobile dan Web. Kami menghadirkan solusi inovatif yang dirancang untuk mendukung otomasi, meningkatkan efisiensi, dan membuka peluang baru dalam berbagai bidang seperti pendidikan, industri, dan kehidupan sehari-hari.
          </p>
          <p className="text-base/loose mb-4 text-justify">
            Dengan memadukan riset, kreativitas, dan teknologi mutakhir, Panzer Robotics menciptakan sistem yang tidak hanya canggih tetapi juga bermanfaat nyata. Setiap proyek kami dirancang untuk memberikan nilai guna yang relevan, mulai dari perangkat pintar hingga integrasi sistem otomasi modern.          </p>
          <p className="text-base/loose mb-10 text-justify">
            Kami percaya teknologi adalah jembatan menuju masa depan yang lebih cerdas dan terhubung. Panzer Robotics siap menjadi mitra dalam menghadirkan solusi berbasis inovasi untuk menjawab tantangan era digital.          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.LogoImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">200<span className="text-violet-500">+</span></h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">8<span className="text-violet-500">+</span></h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        {/* Layanan Kami */}
        <div className="layanan mt-32 relative">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            id="layanan"
          >
            Layanan Kami
          </h1>
          <p
            className="text-base/loose text-center opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Kami tawarkan layanan untuk memenuhi kebutuhan anda
          </p>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between z-10 hidden md:flex pointer-events-none">
            <button
              className="swiper-button-prev-custom pointer-events-auto bg-zinc-700 hover:bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg -ml-14"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              className="swiper-button-next-custom pointer-events-auto bg-zinc-700 hover:bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg -mr-14"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          {/* Swiper */}
          <div className="blog-box mt-14">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-16"
            >
              {listLayanan.map((layanan) => (
                <SwiperSlide key={layanan.id}>
                  <div className="p-4 bg-zinc-800 rounded-md h-150">
                    <img src={layanan.gambar} alt="Layanan" loading="lazy" />
                    <h1 className="text-2xl font-bold my-4">{layanan.nama}</h1>
                    <p className="text-base/loose mb-4">{layanan.desk}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center gap-6 mt-6 md:hidden">
              <button className="swiper-button-prev-custom bg-zinc-700 hover:bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button className="swiper-button-next-custom bg-zinc-700 hover:bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>


        {/* Tools yang dipakai */}
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Beberapa tools yang kami gunakan untuk pengembangan</p>
          <div className="tool-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="blog mt-32 py-10" id="blog">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Blog</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Jelajahi Dunia Teknologi</p>
        <div className="blog-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listBlog.map(blog => (
            <div key={blog.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={blog.dad} data-aos-once="true">
              <img src={blog.gambar} alt="Blog Image" loading="lazy"/>
              <div>
                <h1 className="text-2xl font-bold my-4 ">{blog.nama}</h1>
                <p className="text-base/loose mb-4">{blog.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Blog</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center mb-1 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubung dengan kami.</p>
        <div className="mb-4 flex justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-green-500 text-green-500 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white transition"
          >
            <i className="ri-whatsapp-line ri-lg"></i>
            <span>Whatsapp</span>
          </a>
        </div>
        <form   action={`https://formsubmit.co/${emailAddress}`} method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan nama" className="border border-zinc-500 p-2 rounded-md" required  />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan email" className="border border-zinc-500 p-2 rounded-md" required  />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan" className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600 mx-auto">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
