"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ChatBubble } from "../components/ChatBubble";
import {
  Shield,
  Clock,
  ArrowRight,
  CreditCard,
  X,
  Globe,
  KeyRound,
  Wallet,
  DollarSign,
  MailCheck,
  Landmark,
  Check,
} from "lucide-react";
import { HelpSidebarBase } from "../components/HelpSidebarBase";
import { PageHelpButton } from "../components/PageHelpButton";
import { ClaimsWalletCardPlus } from "../components/ClaimsWalletCardPlus";
import { claimsWalletPlusHelp } from "../data/pageHelpContent";
import { RecentTransactions } from "../components/RecentTransactions";
import { AdditionalFeatures } from "../components/AdditionalFeatures";
import { PaymentTransferModal } from "../components/PaymentTransferModal";
import { cn } from "../lib/utils";
import Image from "next/image";
import Link from "next/link";
import { paymentMethods, transactions } from "../data/pageHelpContent";

export default function ClaimsWalletMax() {
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [transferAmount, setTransferAmount] = useState("");
  const [transferInProgress, setTransferInProgress] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [modalPaymentMethod, setModalPaymentMethod] = useState("");

  // Wallet and card data
  const walletData = {
    balance: 4750.0,
  };

  const colorClasses: Record<string, string> = {
    "direct-card":
      "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    ach: "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    default:
      "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
  };

  const toggleHelpSidebar = () => {
    setIsHelpOpen(!isHelpOpen);
  };

  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      setOtpError("Please enter a 6-digit code");
      return;
    }

    // In a real implementation, this would verify against a backend service
    if (otp === "123456") {
      setShowOTPModal(false);
      setShowCardDetails(true);
      setOtp("");
      setOtpError("");
    } else {
      setOtpError("Invalid verification code");
    }
  };

  const handleSelectPaymentMethod = (methodId: string) => {
    const method = paymentMethods.find((m) => m.id === methodId);
    if (method) {
      setModalPaymentMethod(method.name);
      setShowTransferModal(true);
    }
  };

  const handleShowCardDetails = () => {
    if (!showCardDetails) {
      setShowOTPModal(true);
    } else {
      setShowCardDetails(false);
    }
  };

  const handleTransfer = () => {
    const amount = parseFloat(transferAmount);
    if (isNaN(amount) || amount <= 0 || amount > walletData.balance) {
      return;
    }

    setTransferInProgress(true);

    // Simulate transfer process
    setTimeout(() => {
      setTransferInProgress(false);
      setTransferSuccess(true);

      // Reset after showing success
      setTimeout(() => {
        setShowTransferModal(false);
        setTransferSuccess(false);
        setTransferAmount("");
      }, 2000);
    }, 1500);
  };

  const handleRefreshWallet = () => {
    setShowTransferModal(true);
  };

  // Animation variants
  const cardContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FF] dark:bg-gray-950">
      <Header />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-14">
            <div className="mb-8 flex justify-center">
              <Image
                src="/Juice-2024-Logo-2000x800.png"
                alt="Juice Financial"
                width={2000}
                height={800}
                className="h-16 w-auto"
                priority
              />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Claims Wallet Max
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Access your funds instantly and choose how you want to receive
              your payment. Enhanced features with maximum flexibility.
            </p>
          </div>
          {/* Wallet Display - Prominent central position */}
          <div className="max-w-5xl mx-auto mb-10">
            <ClaimsWalletCardPlus
              balance={walletData.balance}
              onRefresh={handleRefreshWallet}
            />
          </div>
          {/* Payment Method Options Section */}
          <motion.div
            className="max-w-5xl mx-auto mb-16"
            variants={cardContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              Select Payment Method
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Virtual Card - Primary Option (Largest, Most Prominent) */}
              <motion.div className="md:col-span-2" variants={cardVariants}>
                <button
                  onClick={() => handleSelectPaymentMethod("virtual-card")}
                  className="w-full bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-600/50 dark:border-blue-500/30 flex md:flex-row flex-col items-center text-left gap-6 relative overflow-hidden group"
                >
                  {/* Card visual */}
                  <div className="w-[200px] h-[120px] rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex-shrink-0 shadow-lg relative">
                    <div className="absolute top-2 left-2">
                      <Image
                        src="/Juice-2024-Logo-2000x800.png"
                        alt="Juice Financial"
                        width={2000}
                        height={800}
                        className="h-6 w-auto"
                        priority
                      />
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <Image
                        src="https://www.mastercard.com/content/dam/public/mastercardcom/na/us/en/homepage/Home/mc-logo-52.svg"
                        alt="Mastercard"
                        width={52}
                        height={52}
                        className="h-6 w-auto"
                      />
                    </div>
                    <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/70">
                      **** 4444
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <CreditCard className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Virtual Mastercard</h3>
                      <div className="ml-auto">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                          INSTANT
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Get instant access to your funds with a virtual Mastercard
                      that can be used anywhere online or added to your mobile
                      wallet.
                    </p>
                    <div className="flex items-center text-blue-600">
                      <span className="font-medium">Select Virtual Card</span>
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Background glow effect on hover */}
                  <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </motion.div>

              {/* Secondary payment options */}
              {paymentMethods.slice(1).map((method, index) => (
                <motion.div key={method.id} variants={cardVariants}>
                  <button
                    onClick={() => handleSelectPaymentMethod(method.id)}
                    className="w-full h-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 flex flex-col text-left gap-4 relative overflow-hidden group"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <div
                        className={cn(
                          "p-2 rounded-full",
                          colorClasses[method.id] || colorClasses.default
                        )}
                      >
                        <method.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold">{method.name}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {method.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {method.timeframe}
                      </span>
                      <span className="text-blue-600 flex items-center text-sm">
                        <span>Select</span>
                        <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>

                    {/* Background glow effect on hover */}
                    <div className="absolute inset-0 bg-gray-600/5 dark:bg-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Transactions */}
          <RecentTransactions transactions={transactions} />

          {/* Additional Features & Cards */}
          <AdditionalFeatures />
        </div>
      </main>

      {/* Fixed position help button */}
      <div className="fixed top-20 right-4 z-40">
        <PageHelpButton onClick={toggleHelpSidebar} isOpen={isHelpOpen} />
      </div>

      {/* Page-specific help sidebar */}
      <HelpSidebarBase
        isOpen={isHelpOpen}
        onClose={toggleHelpSidebar}
        content={claimsWalletPlusHelp}
      />

      <ChatBubble />

      {/* OTP Verification Modal */}
      {showOTPModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <KeyRound className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold">Verify Identity</h3>
              </div>
              <button
                onClick={() => {
                  setShowOTPModal(false);
                  setOtp("");
                  setOtpError("");
                }}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              For your security, please enter the 6-digit verification code sent
              to your registered phone number.
            </p>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
                    setOtp(value);
                    setOtpError("");
                  }}
                  placeholder="Enter 6-digit code"
                  className="w-full px-4 py-2 text-center text-2xl tracking-wider rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                  maxLength={6}
                />
                {otpError && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {otpError}
                  </p>
                )}
              </div>

              <button
                onClick={handleVerifyOTP}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all",
                  acceptedTerms
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400"
                )}
                disabled={!acceptedTerms}
              >
                Verify Code
                <ArrowRight className="h-5 w-5" />
              </button>

              <div className="text-center">
                <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                  Resend Code
                </button>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                />
                <label htmlFor="terms">
                  I accept the{" "}
                  <Link
                    href="https://juicefin.com/wp-content/uploads/2024/10/CLL-09272024-001.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Cardholder Terms & Conditions
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Transfer Modal */}
      <PaymentTransferModal
        show={showTransferModal}
        onClose={() => {
          setShowTransferModal(false);
          setTransferAmount("");
          setTransferSuccess(false);
        }}
        modalPaymentMethod={modalPaymentMethod}
        transferAmount={transferAmount}
        setTransferAmount={setTransferAmount}
        transferInProgress={transferInProgress}
        transferSuccess={transferSuccess}
        handleTransfer={handleTransfer}
        walletBalance={walletData.balance}
      />

      <Footer />
    </div>
  );
}
