import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import HomeFilters from "@/components/home/HomeFilters"
import QuestionCard from "@/components/cards/QuestionCard"

const questions = [
  {
    _id: '1',
    title: 'The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this',
    tags: [
      { _id: '1', name: 'javascript' },
      { _id: '2', name: 'react.js' },
      { _id: '3', name: 'invalid fields' },
      { _id: '4', name: 'salesforce' }
    ],
    author: {
      _id: '1',
      name: 'Satheesh',
      picture: '/icons/user.svg'
    },
    upvotes: 1200,
    views: 5200,
    answers: 900,
    createdAt: '2 mins ago'
  },
  {
    _id: '2',
    title: 'Best practices for data fetching in a Next.js application with Server Components',
    tags: [
      { _id: '1', name: 'next.js' },
      { _id: '2', name: 'server components' },
      { _id: '3', name: 'data fetching' }
    ],
    author: {
      _id: '2',
      name: 'John Doe',
      picture: '/icons/user.svg'
    },
    upvotes: 750,
    views: 3100,
    answers: 450,
    createdAt: '1 hour ago'
  },
  {
    _id: '3',
    title: 'Understanding TypeScript utility types and their practical applications',
    tags: [
      { _id: '1', name: 'typescript' },
      { _id: '2', name: 'javascript' },
      { _id: '3', name: 'utility types' }
    ],
    author: {
      _id: '3',
      name: 'Jane Smith',
      picture: '/icons/user.svg'
    },
    upvotes: 450,
    views: 2800,
    answers: 200,
    createdAt: '5 hours ago'
  }
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 w-full">
        <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
          <Image 
            src="/icons/search.svg"
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Input 
            type="text"
            placeholder="Search for questions here..."
            className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none dark:placeholder:text-light-500"
          />
        </div>
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.map((question) => (
          <QuestionCard key={question._id} {...question} />
        ))}
      </div>
    </>
  )
}
