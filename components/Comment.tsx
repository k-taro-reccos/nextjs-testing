import React from 'react'
import { FC } from 'react'
import { COMMENT } from '../types/Types'

export const Comment: FC<COMMENT> = ({id, name, body}) => {
  return (
    <li className='mx-10'>
      <p className=''>
        {id}
        {': '}
        {body}
        <p className='text-center mt-3 mb-10'>
          {'by '}
          {name}
        </p>
      </p>
    </li>
  )
}

