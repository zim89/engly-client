import { QueryProvider } from './query-provider'
import { ThemeProvider } from './theme-provider'

export const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  )
}
