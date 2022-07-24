import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1 className="title">
                Link to {' '}
                <Link href='/posts/first-post'>
                    <a>first post</a>
                </Link>
            </h1>

            <section className={utilStyles.headingMd}>
                <p>
                    (This is a sample website - from this{' '}
                    <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
                </p>
            </section>
        </Layout>
    );
}