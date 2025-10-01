import { CreditCard, MailCheck, Landmark } from "lucide-react";
import { TransactionType } from "../types";

export const claimsWalletPlusHelp = {
  title: "Claims Wallet Plus Help",
  description:
    "Claims Wallet Plus offers enhanced features including a virtual Mastercard and mobile wallet integration for your claim funds.",
  sections: [
    {
      title: "Enhanced Features",
      items: [
        {
          title: "Virtual Mastercard",
          description:
            "Access a virtual Mastercard that can be used for online and in-store purchases wherever Mastercard is accepted.",
        },
        {
          title: "Mobile Wallet Integration",
          description:
            "Add your virtual card to Apple Pay, Google Pay, or Samsung Pay for contactless payments.",
        },
        {
          title: "Transaction History",
          description:
            "View detailed history of all transactions made with your virtual card.",
        },
        {
          title: "Security Controls",
          description:
            "Manage card security settings including locking your card and setting purchase limits.",
        },
      ],
    },
    {
      title: "Activation & Setup",
      items: [
        {
          title: "Card Activation",
          description:
            "Your card requires verification via a secure one-time password (OTP) sent to your registered phone number.",
        },
        {
          title: "Adding to Mobile Wallet",
          description:
            "After activation, use the 'Add to Mobile Wallet' options to add your card to your preferred mobile payment app.",
        },
        {
          title: "Terms & Conditions",
          description:
            "Review and accept the cardholder terms and conditions before using your virtual card.",
        },
      ],
    },
  ],
};

export const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/legal", label: "Terms of Service" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/sitemap", label: "Sitemap" },
];

export const paymentMethods = [
  {
    id: "virtual-card",
    name: "Virtual Card",
    description: "Instant access to funds with Mastercard",
    icon: CreditCard,
    timeframe: "Instant",
    priority: 1,
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: "direct-card",
    name: "Direct to Visa/Mastercard",
    description: "Send money to your existing credit or debit card",
    icon: CreditCard,
    timeframe: "10-30 minutes",
    priority: 2,
    color: "from-green-600 to-emerald-600",
  },
  {
    id: "ach",
    name: "ACH to Bank",
    description: "Transfer directly to your bank account",
    icon: Landmark,
    timeframe: "1-3 business days",
    priority: 3,
    color: "from-purple-600 to-violet-600",
  },
  {
    id: "check",
    name: "eCheck",
    description: "Traditional check sent to your mailing address",
    icon: MailCheck,
    timeframe: "5-7 business days",
    priority: 4,
    color: "from-amber-600 to-orange-600",
  },
];

export const transactions: TransactionType[] = [
  {
    date: "2024-03-15",
    description: "Home Depot Purchase",
    amount: "$250.00",
    status: "Completed",
    method: "Virtual Card",
  },
  {
    date: "2024-03-14",
    description: "Lowes Hardware",
    amount: "$175.50",
    status: "Completed",
    method: "Virtual Card",
  },
  {
    date: "2024-03-13",
    description: "Claim Payment",
    amount: "$5,000.00",
    status: "Completed",
    method: "Deposit",
  },
];
