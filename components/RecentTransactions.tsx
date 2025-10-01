"use client";

import React from "react";
import { TransactionType } from "../types";
import { Label } from "./Label";

interface RecentTransactionsProps {
  transactions: TransactionType[];
}

export const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions,
}) => {
  return (
    <div className="max-w-5xl mx-auto mb-16">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <Label as="h2" className="text-2xl font-bold mb-6">
          Recent Transactions
        </Label>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-4">Date</th>
                <th className="text-left py-4 px-4">Description</th>
                <th className="text-left py-4 px-4">Amount</th>
                <th className="text-left py-4 px-4">Status</th>
                <th className="text-left py-4 px-4">Method</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <td className="py-4 px-4">{tx.date}</td>
                  <td className="py-4 px-4">{tx.description}</td>
                  <td className="py-4 px-4">{tx.amount}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                        tx.status === "Completed"
                          ? "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                          : tx.status === "Pending"
                          ? "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                          : "bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">{tx.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
