"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileMenu } from "./MobileMenu";
import {
  CreditCard,
  FileText,
  Link as LinkIcon,
  Menu,
  X,
  Building2,
  Globe,
  Wallet,
  Home,
  DollarSign,
} from "lucide-react";
import { cn } from "../lib/utils";

export function Header() {
  const { t, i18n } = useTranslation();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [preferredLanguage, setPreferredLanguage] = useState("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "zh", name: "中文" },
    { code: "pt", name: "Português" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "ja", name: "日本語" },
  ];

  const handleLanguageChange = async (langCode: string) => {
    await i18n.changeLanguage(langCode);
    localStorage.setItem("preferredLanguage", langCode);
    setIsLanguageOpen(false);
    window.location.reload();
  };

  // Only access localStorage on the client
  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLanguage");
    if (storedLang) setPreferredLanguage(storedLang);
  }, []);

  // Payment Solutions mega menu categories

  const paymentSolutionsCategories = [
    {
      title: "Incoming Payments",
      description:
        "Solutions for processing premium payments and policy purchases",
      items: [
        {
          title: "Incoming Payments Summary",
          description: "Overview of our incoming payment solutions",
          icon: DollarSign,
          href: "/incoming-payments",
          divider: true,
          isSummary: true,
        },
        {
          title: "Premium Pay - Agent",
          description: "Process premium payments for insurance agents",
          icon: CreditCard,
          href: "/premium-pay-agent",
        },
        {
          title: "Premium Pay - Client",
          description: "Pay your insurance premium securely and conveniently",
          icon: CreditCard,
          href: "/premium-pay-client",
        },
        {
          title: "Policy Hub",
          description: "Access and manage your policy details and documents",
          icon: FileText,
          href: "/policy-hub",
        },
      ],
    },
    {
      title: "Outgoing Payments",
      description: "Solutions for processing claims and beneficiary payments",
      items: [
        {
          title: "Outgoing Payments Summary",
          description: "Overview of our outgoing payment solutions",
          icon: DollarSign,
          href: "/outgoing-payments",
          divider: true,
          isSummary: true,
        },
        {
          title: "Pay Link",
          description:
            "Create a one-time payment link with customizable options",
          icon: LinkIcon,
          href: "/pay-link",
        },
        {
          title: "Pay Partners",
          description:
            "Process payments to partners, agents, and service providers",
          icon: Building2,
          href: "/pay-partners",
        },
        {
          title: "Pay Claims",
          description: "Pay claims instantly with flexible payment methods",
          icon: CreditCard,
          href: "/claim-payment-lander",
        },
      ],
    },
    {
      title: "Domestic & International",
      description:
        "Solutions for processing payments domestically and globally",
      items: [
        {
          title: "Domestic Payments Summary",
          description: "Payment solutions for the United States",
          icon: Home,
          href: "/domestic-payments",
          isSummary: true,
        },
        {
          title: "International Payments Summary",
          description: "Global payment solutions for cross-border transactions",
          icon: Globe,
          href: "/international-payments",
          divider: true,
          isSummary: true,
        },
        {
          title: "Virtual Claims Card",
          description: "Issue instant virtual cards for claims payments",
          icon: CreditCard,
          href: "/virtual-claims-card",
        },
        {
          title: "Claims Wallet Solutions",
          description: "Digital wallet solutions for managing claim funds",
          icon: Wallet,
          href: "/claims-wallet",
        },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-[#f9fafb]/80 dark:bg-gray-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex-none">
          <Link href="/" className="block">
            <Image
              src="/Juice-2024-Logo-2000x800.png"
              alt="Juice"
              width={2000}
              height={800}
              className="h-8 hidden dark:block w-auto"
            />
            <Image
              src="/Juice-2024-Logo-2000x800.png"
              alt="Juice"
              width={2000}
              height={800}
              className="h-8 block dark:hidden w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <DesktopNavigation
          paymentSolutionsCategories={paymentSolutionsCategories}
        />

        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* Language Switcher */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              onBlur={() => setTimeout(() => setIsLanguageOpen(false), 200)}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <Globe className="h-5 w-5" />
            </button>

            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={cn(
                      "w-full text-left px-4 py-2 text-sm transition-colors",
                      "hover:bg-gray-50 dark:hover:bg-gray-800",
                      preferredLanguage === lang.code
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-400"
                    )}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        paymentSolutionsCategories={paymentSolutionsCategories}
        languages={languages}
        preferredLanguage={preferredLanguage}
        onLanguageChange={handleLanguageChange}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
