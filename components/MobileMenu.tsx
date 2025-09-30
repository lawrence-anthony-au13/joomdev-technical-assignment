"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  paymentSolutionsCategories: any[];
  languages: { code: string; name: string }[];
  preferredLanguage: string;
  onLanguageChange: (lang: string) => void;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  paymentSolutionsCategories,
  languages,
  preferredLanguage,
  onLanguageChange,
  onClose,
}) => {
  const [mobileCategory, setMobileCategory] = useState<string | null>(null);

  const handleMobileCategory = (category: string) => {
    setMobileCategory(mobileCategory === category ? null : category);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-[#f9fafb] dark:bg-gray-950"
        >
          <div className="p-4 space-y-6">
            {/* Payment Solutions Mobile */}
            <div className="space-y-2">
              <div className="font-medium text-sm text-gray-600 dark:text-gray-400">
                PAYMENT SOLUTIONS
              </div>

              {paymentSolutionsCategories.map((category, idx) => (
                <div key={idx} className="mb-3">
                  <button
                    onClick={() => handleMobileCategory(category.title)}
                    className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                  >
                    <span className="font-medium">{category.title}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        mobileCategory === category.title && "rotate-180"
                      )}
                    />
                  </button>

                  {mobileCategory === category.title && (
                    <div className="mt-2 ml-4 space-y-2">
                      {category.items.map((item: any, itemIdx: number) => (
                        <React.Fragment key={itemIdx}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className={cn(
                                  "p-1.5 rounded-md",
                                  item.isSummary
                                    ? "bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400"
                                    : "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400"
                                )}
                              >
                                <item.icon className="h-4 w-4" />
                              </div>
                              <div className="font-medium">{item.title}</div>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              {item.description}
                            </div>
                          </Link>
                          {item.divider && (
                            <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* FAQs */}
            <div className="space-y-2">
              <Link
                href="/rfp"
                className="block px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <div className="font-medium">FAQs</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Frequently Asked Questions
                </div>
              </Link>
            </div>

            {/* Language Selector */}
            <div className="space-y-2">
              <div className="font-medium text-sm text-gray-600 dark:text-gray-400">
                Language
              </div>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code)}
                  className={cn(
                    "w-full text-left px-4 py-2 rounded-lg",
                    preferredLanguage === lang.code
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800"
                  )}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
