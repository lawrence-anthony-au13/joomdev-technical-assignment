import React from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#F2F4F7] dark:bg-gray-950 text-gray-700 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <p className="text-sm mb-4">
                Juice is not a bank. Banking services are provided by First
                Century Bank, N.A., Member FDIC, pursuant to a license from
                Mastercard International.
              </p>
              <p className="text-sm mb-4">
                For customer service please call Juice: (855)-687-2114.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <Link
                  href="/privacy"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-400 dark:text-gray-600">|</span>

                <Link
                  href="/legal"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Terms of Service
                </Link>
                <span className="text-gray-400 dark:text-gray-600">|</span>

                <Link
                  href="/cookie-policy"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Cookie Policy
                </Link>
                <span className="text-gray-400 dark:text-gray-600">|</span>

                <Link
                  href="/sitemap"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Sitemap
                </Link>
              </div>
              <p className="text-sm mt-4">
                © 2025 Juice Financial. All rights reserved. Juice Insurance
                v1.3.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
