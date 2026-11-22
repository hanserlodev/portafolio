import Image from 'next/image';
import { personalInfo } from '@/data/personal';
import { cn } from '@/lib/utils';

/** Foto real del perfil con anillo degradado; cae a la inicial si no hay avatar. */
export default function Avatar({
  size = 128,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1',
        className
      )}
      style={{ width: size + 8, height: size + 8 }}
    >
      {personalInfo.avatar ? (
        <Image
          src={personalInfo.avatar}
          alt={personalInfo.name}
          width={size}
          height={size}
          priority
          className="rounded-full object-cover"
        />
      ) : (
        <div
          className="flex items-center justify-center rounded-full bg-background text-4xl font-bold"
          style={{ width: size, height: size }}
        >
          {personalInfo.name.charAt(0)}
        </div>
      )}
    </div>
  );
}
