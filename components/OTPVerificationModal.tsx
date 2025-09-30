"use client";

import React from "react";
import { X, KeyRound, ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
import Link from "next/link";

interface OTPVerificationModalProps {
  otp: string;
  setOtp: (value: string) => void;
  otpError: string;
  setOtpError: (value: string) => void;
  acceptedTerms: boolean;
  setAcceptedTerms: (value: boolean) => void;
  onClose: () => void;
  onVerify: () => void;
}

export const OTPVerificationModal: React.FC<OTPVerificationModalProps> = ({
  otp,
  setOtp,
  otpError,
  setOtpError,
  acceptedTerms,
  setAcceptedTerms,
  onClose,
  onVerify,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <KeyRound className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-bold">Verify Identity</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          For your security, please enter the 6-digit verification code sent to
          your registered phone number.
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
            onClick={onVerify}
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
  );
};
