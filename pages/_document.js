import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    /**Meta Tags for Social Previews */
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://use.typekit.net/uov6xbj.css"></link>
                    <meta property="og:title" content="Quest Ecosystem"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:image" content="/Quest_Pink_Logo.svg"/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:site" content="@ourquest_xyz"/>
                    <meta name="twitter:creator" content="@ourquest_xyz"/>
                    <meta name="twitter:image" content="/Quest_Pink_Logo.svg"></meta>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument