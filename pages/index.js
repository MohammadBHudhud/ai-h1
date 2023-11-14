import Image from 'next/image'
import { Inter } from 'next/font/google'
import AddItemForm from '@/components/AddItemForm/AddItemForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<AddItemForm />
  )
}
