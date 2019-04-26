import Document, { Html, Head, Main, NextScript } from 'next/document';
import { extractCritical } from '../emotion-server';

class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);

        const page = ctx.renderPage();
        const css = extractCritical(page.html).css;

        return { ...initialProps, css };
    }

    render() {
        const { css } = this.props;
        return (
            <Html>
                <Head>
                    <style>{css}</style>
                </Head>
                <body className="custom_class">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;