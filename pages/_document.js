import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="es">
                <Head />
                <body>
                    <Main />
                    <NextScript />

                    {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js"></script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;