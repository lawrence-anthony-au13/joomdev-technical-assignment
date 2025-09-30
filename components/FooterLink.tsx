import React from "react";
import Link from "next/link";

interface FooterLinkProps {
  links: { href: string; label: string }[];
}

export const FooterLink: React.FC<FooterLinkProps> = ({ links }) => {
  return (
    <div className="flex items-center justify-center gap-4 text-sm flex-wrap">
      {links.map((link, idx) => (
        <React.Fragment key={link.href}>
          <Link
            href={link.href}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            {link.label}
          </Link>
          {idx < links.length - 1 && (
            <span className="text-gray-400 dark:text-gray-600">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
