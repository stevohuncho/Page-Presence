"use client";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { usePagePresence } from "../usePagePresence";

interface PagePresenceLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  delay?: number;
}

export const PagePresenceLink: React.FC<PagePresenceLinkProps> = ({
  children,
  href,
  delay = 0,
  ...props
}) => {
  const router = useRouter();
  const { setShow } = usePagePresence();

  return (
    <Link
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setShow(false);
        setTimeout(() => {
          router.push(href);
        }, delay);
      }}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};
