import axios from 'axios'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import useSWR from 'swr'
import { Layout } from '../components/Layout'
import { getAllTasksData } from '../lib/fetch'
import { TASK } from '../types/Types'

interface STATICPROPS {
  staticTasks: TASK[]
}

const axiosFetcher = async () => {
  const result = await axios.get<TASK[]>(
    'https://jsonplaceholder.typicode.com/todos/?_limit=10'
  )
  return result.data
}

const TaskPage: FC<STATICPROPS> = ({ staticTasks }) => {
  const { data: tasks, error } = useSWR('todosFetch', axiosFetcher, {
    fallbackData: staticTasks,
    revalidateOnMount: true,
  })
  if (error) return <span>Error!</span>

  return (
    <Layout title="Todos">
      <p className="text-4xl mb-10">todos page</p>
      <ul>
        {tasks &&
          tasks.map((task) => (
            <li key={task.id}>
              {task.id}
              {': '}
              <span>{task.title}</span>
            </li>
          ))}
      </ul>
    </Layout>
  )
}

export default TaskPage

export const getStaticProps: GetStaticProps = async () => {
  const staticTasks = await getAllTasksData()
  return {
    props: {
      staticTasks,
    },
  }
}
