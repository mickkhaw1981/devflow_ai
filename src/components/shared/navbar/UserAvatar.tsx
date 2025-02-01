import Link from "next/link";
import Image from "next/image";

interface UserAvatarProps {
  className?: string;
}

const UserAvatar = ({ className }: UserAvatarProps) => {
  return (
    <Link href="/profile">
      <Image
        src="/icons/user.svg"
        alt="user avatar"
        width={40}
        height={40}
        className={`rounded-full ${className || ''}`}
      />
    </Link>
  );
};

export default UserAvatar;