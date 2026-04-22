// src/components/Footer.jsx
import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="bg-[#fcfbf9] bg-texture text-gray-800 pt-20 pb-10 px-6 flex flex-col justify-between overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 w-full mt-auto mb-auto">

        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-4 drop-shadow-sm">
            Rooma Ceritarasa<span className="text-primary">.</span>
          </h2>
          <p className="text-gray-600 font-light mb-6">
            Where every meal is an unforgettable story. Follow us on our culinary journey.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/rooma.ceritarasa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white hover:border-primary text-gray-600">
              <span className="sr-only">Instagram</span>
              <InstagramLogo size={20} />
            </a>
            <a href="https://tr.ee/x_mE3wmVJZ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white hover:border-primary text-gray-600">
              <span className="sr-only">WhatsApp</span>
              <WhatsappLogo size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
          <ul className="space-y-3 text-gray-600 font-medium">
            <li className="flex items-start group">
              <span className="text-primary mr-2 transform transition-transform group-hover:scale-110">📍</span>
              <span>Jl. Lawu No.2, Kotabaru, Kec. Gondokusuman,<br />Kota Yogyakarta, Daerah Istimewa Yogyakarta 55224, Indonesia</span>
            </li>
            <li className="flex items-center group">
              <span className="text-primary mr-2 transform transition-transform group-hover:scale-110">📞</span>
              <span>+62 857 2553 9262</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Session Times</h3>
          <ul className="space-y-3 text-gray-600 flex flex-col justify-center h-full pt-2">
            <li className="flex justify-between border-b border-dashed border-gray-300 pb-2 transition-transform duration-300 hover:translate-x-2 cursor-default">
              <span className="font-semibold text-gray-800">15.00 - 17.00</span>
            </li>
            <li className="flex justify-between border-b border-dashed border-gray-300 pb-2 transition-transform duration-300 hover:translate-x-2 cursor-default">
              <span className="font-semibold text-gray-800">17.30 - 19.30</span>
            </li>
            <li className="flex justify-between border-b border-dashed border-gray-300 pb-2 transition-transform duration-300 hover:translate-x-2 cursor-default">
              <span className="font-semibold text-gray-800">20.00 - 22.00</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="mt-16 pt-8 border-t border-black/10 text-center text-sm text-gray-500 w-full">
        <p>&copy; {new Date().getFullYear()} Rooma Ceritarasa. All rights reserved.</p>
      </div>
    </footer>
  );
}