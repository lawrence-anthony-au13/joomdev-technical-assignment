"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ChatBubble } from "../components/ChatBubble";
import { Clock, ArrowRight, CreditCard, X, KeyRound } from "lucide-react";
import { HelpSidebarBase } from "../components/HelpSidebarBase";
import { PageHelpButton } from "../components/PageHelpButton";
import { ClaimsWalletCardPlus } from "../components/ClaimsWalletCardPlus";
import { claimsWalletPlusHelp } from "../data/pageHelpContent";
import { RecentTransactions } from "../components/RecentTransactions";
import { AdditionalFeatures } from "../components/AdditionalFeatures";
import { PaymentTransferModal } from "../components/PaymentTransferModal";
import { HeroSection } from "../components/HeroSection";
import { VirtualCard } from "../components/VirtualCard";
import { OTPVerificationModal } from "../components/OTPVerificationModal";
import { cn } from "../lib/utils";
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
          <HeroSection />

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
                <VirtualCard
                  onSelect={() => handleSelectPaymentMethod("virtual-card")}
                />
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
        <OTPVerificationModal
          otp={otp}
          setOtp={setOtp}
          otpError={otpError}
          setOtpError={setOtpError}
          acceptedTerms={acceptedTerms}
          setAcceptedTerms={setAcceptedTerms}
          onClose={() => {
            setShowOTPModal(false);
            setOtp("");
            setOtpError("");
          }}
          onVerify={handleVerifyOTP}
        />
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
