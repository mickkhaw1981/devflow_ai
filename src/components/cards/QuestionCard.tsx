import Link from "next/link";
import Image from "next/image";

interface QuestionProps {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: number;
  views: number;
  answers: number;
  createdAt: string;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionProps) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {createdAt}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>

      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            href={`/tags/${tag._id}`}
            key={tag._id}
            className="background-light800_dark400 text-light400_light500 subtle-medium rounded-[4px] px-4 py-2"
          >
            {tag.name}
          </Link>
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <Link href={`/profile/${author._id}`} className="flex items-center gap-1">
            <Image
              src={author.picture}
              alt="profile"
              width={20}
              height={20}
              className="rounded-full"
            />
            <p className="body-medium text-dark400_light700">{author.name}</p>
          </Link>
          <span className="text-dark400_light700 subtle-regular hidden sm:flex">
            • asked {createdAt}
          </span>
        </div>

        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <div className="flex items-center gap-1">
            <Image
              src="/icons/like.svg"
              alt="upvotes"
              width={16}
              height={16}
            />
            <p className="text-dark400_light700 small-medium">{upvotes}</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/icons/message.svg"
              alt="answers"
              width={16}
              height={16}
            />
            <p className="text-dark400_light700 small-medium">{answers}</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/icons/eye.svg"
              alt="views"
              width={16}
              height={16}
            />
            <p className="text-dark400_light700 small-medium">{views}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard; 