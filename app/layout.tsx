import './globals.sass'

export default function RootLayout({children,}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        </head>
        <body>{children}</body>
        </html>
    );
}