import Head from "next/head";
import { Layout, siteTitle } from "../components/layout";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Wasssssssssup</p>
        <h1 className='title'>
          Read <Link href='/posts/first-post'>this page!</Link>
        </h1>
      </section>
    </Layout>
  );
}
