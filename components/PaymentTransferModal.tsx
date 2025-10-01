"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Wallet,
  X,
  DollarSign,
  Clock,
  Shield,
  ArrowRight,
  Check,
} from "lucide-react";
import { cn } from "../lib/utils";
import { paymentMethods } from "../data/pageHelpContent";
import { Label } from "./Label";

interface PaymentTransferModalProps {
  show: boolean;
  onClose: () => void;
  modalPaymentMethod: string;
  transferAmount: string;
  setTransferAmount: (value: string) => void;
  transferInProgress: boolean;
  transferSuccess: boolean;
  handleTransfer: () => void;
  walletBalance: number;
}

export function PaymentTransferModal({
  show,
  onClose,
  modalPaymentMethod,
  transferAmount,
  setTransferAmount,
  transferInProgress,
  transferSuccess,
  handleTransfer,
  walletBalance,
}: PaymentTransferModalProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            if (!transferInProgress && !transferSuccess) {
              onClose();
            }
          }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {!transferSuccess ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Wallet className="h-6 w-6 text-blue-600" />
                    <Label as="h3" className="text-xl font-bold">
                      {transferInProgress
                        ? "Processing..."
                        : `Transfer to ${modalPaymentMethod}`}
                    </Label>
                  </div>
                  {!transferInProgress && (
                    <button
                      onClick={onClose}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  )}
                </div>

                {transferInProgress ? (
                  <div className="py-10 flex flex-col items-center justify-center">
                    <div className="mb-6">
                      <motion.div
                        className="h-16 w-16 rounded-full border-4 border-blue-200 border-t-blue-600"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                    <p className="text-center text-gray-600 dark:text-gray-400">
                      Transferring funds to your{" "}
                      {modalPaymentMethod.toLowerCase()}...
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6 flex items-center">
                      <DollarSign className="h-10 w-10 text-blue-600 dark:text-blue-400 mr-3" />
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Available Balance
                        </div>
                        <div className="text-xl font-bold">
                          ${walletBalance.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <Label
                        as="label"
                        className="block text-sm font-medium mb-2"
                      >
                        Transfer Amount
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                          $
                        </span>
                        <input
                          type="number"
                          value={transferAmount}
                          onChange={(e) => setTransferAmount(e.target.value)}
                          placeholder="0.00"
                          className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-xl"
                          min="0.01"
                          max={walletBalance}
                          step="0.01"
                        />
                      </div>
                    </div>

                    {modalPaymentMethod === paymentMethods[2].name && (
                      <div className="space-y-4 mb-6">
                        <div>
                          <Label
                            as="label"
                            className="block text-sm font-medium mb-2"
                          >
                            Bank Name
                          </Label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                            placeholder="Enter bank name"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label
                              as="label"
                              className="block text-sm font-medium mb-2"
                            >
                              Routing Number
                            </Label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                              placeholder="9 digits"
                            />
                          </div>
                          <div>
                            <Label
                              as="label"
                              className="block text-sm font-medium mb-2"
                            >
                              Account Number
                            </Label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                              placeholder="Account number"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {modalPaymentMethod === paymentMethods[1].name && (
                      <div className="space-y-4 mb-6">
                        <div>
                          <Label
                            as="label"
                            className="block text-sm font-medium mb-2"
                          >
                            Card Number
                          </Label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                            placeholder="Card number"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label
                              as="label"
                              className="block text-sm font-medium mb-2"
                            >
                              Expiration Date
                            </Label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <Label
                              as="label"
                              className="block text-sm font-medium mb-2"
                            >
                              Zip Code
                            </Label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                              placeholder="Billing zip code"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {modalPaymentMethod === paymentMethods[3].name && (
                      <div className="space-y-4 mb-6">
                        <div>
                          <Label
                            as="label"
                            className="block text-sm font-medium mb-2"
                          >
                            Mailing Address
                          </Label>
                          <textarea
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                            placeholder="Enter your mailing address"
                            rows={3}
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>
                          {modalPaymentMethod === paymentMethods[0].name
                            ? "Available immediately"
                            : modalPaymentMethod === paymentMethods[1].name
                            ? "Typically takes 10-30 minutes"
                            : modalPaymentMethod === paymentMethods[2].name
                            ? "Processing time: 1-3 business days"
                            : "Delivery time: 5-7 business days"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        <span>Secure, encrypted transfer</span>
                      </div>
                    </div>

                    {/* Debug field here */}
                    {process.env.NODE_ENV !== "production" && (
                      <div className="mb-6 border border-red-400 p-3 rounded-lg bg-red-50">
                        <Label
                          as="label"
                          className="block text-sm font-medium mb-2 text-red-600"
                        >
                          ⚠️ Test Field (Debug Only – Will Not Appear in
                          Production)
                        </Label>
                        <input
                          type="text"
                          placeholder="Enter test value"
                          className="w-full px-4 py-2 rounded-lg border border-red-400 text-red-700"
                        />
                        <p className="text-xs text-red-500 mt-1 italic">
                          This field is for debugging/validation checks only.
                        </p>
                      </div>
                    )}

                    <button
                      onClick={handleTransfer}
                      disabled={
                        !transferAmount ||
                        parseFloat(transferAmount) <= 0 ||
                        parseFloat(transferAmount) > walletBalance
                      }
                      className={cn(
                        "w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all",
                        !transferAmount ||
                          parseFloat(transferAmount) <= 0 ||
                          parseFloat(transferAmount) > walletBalance
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400"
                          : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg"
                      )}
                    >
                      <span>Transfer Funds</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </>
            ) : (
              <div className="py-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <Label as="h3" className="text-xl font-bold mb-2">
                  Transfer Successful!
                </Label>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  ${parseFloat(transferAmount).toFixed(2)} has been sent to your{" "}
                  {modalPaymentMethod.toLowerCase()}.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
