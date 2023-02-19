import "./App.css";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { RiMapPin2Line, RiPaintBrushFill } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoConstructOutline } from "react-icons/io5";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <header className="flex flex-col md:flex-row items-center justify-between bg-white py-4 px-6">
          <div className="text-2xl font-bold text-gray-800">
            Katara Karya Studio
          </div>
          {/* <nav className="flex">
            <a href="/" className="text-gray-800 py-2 px-4 hover:text-gray-700">
              Home
            </a>
            <a
              href="/about"
              className="text-gray-800 py-2 px-4 hover:text-gray-700"
            >
              About
            </a>
            <a
              href="/services"
              className="text-gray-800 py-2 px-4 hover:text-gray-700"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-gray-800 py-2 px-4 hover:text-gray-700"
            >
              Contact
            </a>
          </nav> */}
        </header>
        <section className="flex items-center justify-center py-20">
          <div className="max-w-5xl">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-2 px-4">
              Design & Build
            </h1>
            <h2 className=" mb-8 px-4">Interior & furniture custom</h2>
            <p className="text-md lg:text-xl px-4 text-justify text-gray-600 mb-8">
              Jasa Desain Interior dan Produksi furniture yang Bertujuan Untuk
              Menciptakan Suasana yang nyaman Dengan Desain dan style yang
              moderen dan Senantiasa Memberikan Solusi Untuk Kebutuhan anda
            </p>
            <a
              href="https://www.instagram.com/katara_karya_studio/"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 text-white ml-4 py-3 px-8 rounded-full hover:bg-gray-700"
            >
              Our Product
            </a>
          </div>
        </section>
        <section className="bg-slate-200 py-10">
          <div className="grid lg:grid-cols-3 gap-2 mx-auto px-10">
            <div className="flex justify-between bg-slate-500 py-5 px-5 w-full rounded">
              <div>
                <MdOutlineDesignServices
                  size={60}
                  className="text-white bg-slate-500 p-2 rounded hover:bg-slate-600"
                />
              </div>
              <div className="pl-2">
                <h1 className="text-white font-semibold">Planning</h1>
                <p className="text-sm text-white hidden md:block">
                  Merencanakan Projek Yang Akan Dibuat Berdasarkan Keinginan
                  anda Dengan Mempertimbangkan Bahan Atau Material yang sesuai
                  yang anda pilih, kami senantiasa memberikan solusi untuk
                  kebutuhan anda.
                </p>
                <p className="text-sm text-white block md:hidden">
                  Merencanakan Projek Yang Akan Dibuat Berdasarkan Keinginan
                  anda Dengan Mempertimbangkan Bahan Atau Material yang sesuai
                  yang anda pilih.
                </p>
              </div>
            </div>
            <div className="flex justify-between bg-slate-500 py-5 px-5 w-full rounded">
              <div>
                <IoConstructOutline
                  size={60}
                  className="text-white bg-slate-500 p-2 rounded hover:bg-slate-600"
                />
              </div>
              <div className="pl-2">
                <h1 className="text-white font-semibold">Build</h1>
                <p className="text-sm text-white">
                  Memproduksi Dengan matrial yang sudah Disepakati Dari Awal
                  Untuk Membererikan Kepuasan Kepada Anda.
                </p>
              </div>
            </div>
            <div className="flex justify-between bg-slate-500 py-5 px-5 w-full rounded">
              <div>
                <RiPaintBrushFill
                  size={60}
                  className="text-white bg-slate-500 p-2 rounded hover:bg-slate-600"
                />
              </div>
              <div className="pl-2">
                <h1 className="text-white font-semibold">Renovation</h1>
                <p className="text-sm text-white">
                  Memperbaiki Dan Mempercantik Ruangan Anda untuk tampilan yang
                  lebih segar dan menarik.
                </p>
              </div>
            </div>
            {/* <div className="flex justify-between bg-red-500 py-5 px-5 w-full rounded">
              <div>
                <MdOutlineDesignServices
                  size={60}
                  className="text-white bg-slate-500 p-2 rounded hover:bg-slate-600"
                />
              </div>
              <div className="pl-2">
                <h1 className="text-white font-semibold">Renovation</h1>
                <p className="text-sm text-white">
                  Memperbaiki Dan Mempercantik Tampilan Ruangan Anda.
                </p>
              </div>
            </div> */}
          </div>
        </section>
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Kontak Kami
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Silakan hubungi kami untuk informasi lebih lanjut tentang jasa
              desain interior kami.
            </p>
            <div className="grid grid-cols-3 mt-10 max-w-md mx-auto w-full">
              <div className="mx-auto">
                <a
                  href="https://wa.me/6285722793971"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineWhatsApp
                    size={60}
                    className="text-white bg-slate-500 p-2 rounded hover:bg-slate-600"
                  />
                </a>
              </div>
              <div className="mx-auto">
                <a
                  href="https://www.instagram.com/katara_karya_studio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram
                    size={60}
                    className="text-white bg-slate-500 p-2 rounded hover:bg-slate-600"
                  />
                </a>
              </div>
              <div className="mx-auto">
                <a
                  href="https://www.google.com/maps/place/Jl.+Raya+Simpang,+Tambakmekar,+Kec.+Jalancagak,+Kabupaten+Subang,+Jawa+Barat/@-6.6547771,107.7165322,17z/data=!4m6!3m5!1s0x2e6923b52a92553f:0xc5dcb69f81ed2ebc!8m2!3d-6.6548587!4d107.7163844!16s%2Fg%2F1hm3lg2xj?hl=id"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiMapPin2Line
                    size={60}
                    className="text-white bg-slate-500 p-2 rounded hover:bg-slate-600"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-white py-4 px-6 text-gray-600 text-sm">
          &copy; 2023 Katara Karya Studio. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
