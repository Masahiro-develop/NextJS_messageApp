import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head />
      <body style={{display:'flex'}}>{children}</body>
    </html>
  )
}
