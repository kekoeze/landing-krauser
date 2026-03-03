"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Partner } from '@/lib/partners';

const sizeStyles = {
  sm: { wrapper: 'w-12 h-12 p-2', text: 'text-xs', image: 20 },
  md: { wrapper: 'w-16 h-16 p-3', text: 'text-sm', image: 28 },
  lg: { wrapper: 'w-24 h-24 p-4', text: 'text-lg', image: 44 },
};

type PartnerLogoProps = {
  partner: Partner;
  size?: keyof typeof sizeStyles;
  className?: string;
};

export default function PartnerLogo({
  partner,
  size = 'md',
  className,
}: PartnerLogoProps) {
  const styles = sizeStyles[size];
  const initials =
    partner.logo.initials ||
    partner.name
      .split(' ')
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase())
      .join('');

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-2xl bg-gradient-to-r shadow-lg transition-transform duration-300',
        partner.logo.gradient,
        styles.wrapper,
        className
      )}
      aria-label={`${partner.name} logo`}
    >
      {partner.logo.src ? (
        <Image
          src={partner.logo.src}
          alt={partner.logo.alt}
          width={styles.image}
          height={styles.image}
          className="object-contain"
        />
      ) : (
        <span className={cn('text-white font-semibold tracking-wide', styles.text)}>
          {initials}
        </span>
      )}
    </div>
  );
}
