"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Globe } from "lucide-react";
import { Label } from "./Label";

interface DesktopNavigationProps {
  paymentSolutionsCategories: any[];
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  paymentSolutionsCategories,
}) => {
  const [isPaymentSolutionsOpen, setIsPaymentSolutionsOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:flex items-center justify-center flex-grow gap-8">
        <div className="flex items-center gap-8">
          {/* Payment Solutions Mega Menu */}
          <div className="relative">
            <button
              onClick={() => setIsPaymentSolutionsOpen(!isPaymentSolutionsOpen)}
              onBlur={() =>
                setTimeout(() => setIsPaymentSolutionsOpen(false), 200)
              }
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center gap-1"
            >
              PAYMENT SOLUTIONS
              <ChevronDown className="h-4 w-4" />
            </button>

            {isPaymentSolutionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] max-w-[90vw] bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 p-6 max-h-[80vh] overflow-y-auto">
                <div className="grid grid-cols-3 gap-8">
                  {paymentSolutionsCategories.map((category, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                        <Label
                          as="h3"
                          className="font-semibold text-gray-900 dark:text-white"
                        >
                          {category.title}
                        </Label>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {category.description}
                        </p>
                      </div>
                      <div className="grid gap-3">
                        {category.items.map((item: any, itemIdx: number) => {
                          const Icon = item.icon;
                          return (
                            <React.Fragment key={itemIdx}>
                              <Link
                                href={item.href}
                                className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                              >
                                <div className="flex-none">
                                  <div
                                    className={`p-2 rounded-lg ${
                                      item.isSummary
                                        ? "bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400"
                                        : "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400"
                                    }`}
                                  >
                                    <Icon className="h-5 w-5" />
                                  </div>
                                </div>
                                <div>
                                  <Label
                                    as="h4"
                                    className="font-medium text-gray-900 dark:text-gray-100 mb-1"
                                  >
                                    {item.title}
                                  </Label>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                              {item.divider && (
                                <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* FAQs Link */}
          <div className="relative">
            <Link
              href="/rfp"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              FAQs
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
