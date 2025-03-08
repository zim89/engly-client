import Link from 'next/link'
import { appRoutes } from '@/shared/config'

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={appRoutes.login}>Login</Link>
    </div>
  )
}
