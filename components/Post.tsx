import { FC } from 'react'
import { POST } from '../types/Types'
import Link from 'next/link'

export const Post: FC<POST> = ({ id, title }) => {
  return (
    <div>
      <span>{id}</span>
      {' : '}
      <Link href={`/posts/${id}`}>
        <a className="cursor-pointer border-b border-gray-500 hover:bg-gray-300">
          {title}
        </a>
      </Link>
    </div>
  )
}
