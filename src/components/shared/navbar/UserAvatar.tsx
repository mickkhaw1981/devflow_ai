import Link from "next/link";

const UserAvatar = () => {
  return (
    <Link href="/profile">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-500 text-light-900">
        JD
      </div>
    </Link>
  );
};

export default UserAvatar;