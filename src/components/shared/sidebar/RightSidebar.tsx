import Link from "next/link";
import Image from "next/image";

const hotQuestions = [
  {
    _id: '1',
    title: 'How do I use Express.js middleware?',
  },
  {
    _id: '2',
    title: 'What are the best practices for React hooks?',
  },
  {
    _id: '3',
    title: 'How to center a div in CSS?',
  },
  {
    _id: '4',
    title: 'Redux Toolkit vs Context API: Which one to choose?',
  },
  {
    _id: '5',
    title: 'What is the difference between let and const?',
  }
];

const popularTags = [
  {
    _id: '1',
    name: 'javascript',
    totalQuestions: 5023,
  },
  {
    _id: '2',
    name: 'react',
    totalQuestions: 3789,
  },
  {
    _id: '3',
    name: 'next.js',
    totalQuestions: 2100,
  },
  {
    _id: '4',
    name: 'typescript',
    totalQuestions: 1856,
  },
  {
    _id: '5',
    name: 'tailwindcss',
    totalQuestions: 1204,
  }
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/question/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{question.title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <Link
              href={`/tags/${tag._id}`}
              key={tag._id}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2">
                <div className="background-light800_dark400 flex items-center justify-center rounded-sm px-4 py-2">
                  <p className="body-medium text-dark400_light500">{tag.name}</p>
                </div>
              </div>

              <p className="small-medium text-dark500_light700">
                {tag.totalQuestions}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar; 