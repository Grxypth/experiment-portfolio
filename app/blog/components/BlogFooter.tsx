import React from 'react';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const baseUrl = "https://www.erdemihsan.me/tr";
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currentYear}{' '}
          <a href={baseUrl} className="hover:underline">
            IhsanErdem™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href={`${baseUrl}#about`} className="hover:underline me-4 md:me-6" aria-label="About Me">
              Hakkımda
            </a>
          </li>
          <li>
            <a href={`${baseUrl}#contact`} className="hover:underline" aria-label="Contact">
              İletişim
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
