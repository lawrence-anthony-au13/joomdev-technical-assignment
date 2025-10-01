import React from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { footerLinks } from "../data/pageHelpContent";
import { FooterLink } from "./FooterLink";

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

              <FooterLink links={footerLinks} />

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
