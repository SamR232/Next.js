import Head from "next/head";
import { Layout, siteTitle } from "../components/layout";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

/* Example get static props (executed at build time). Only runs on the server-side.
Because it’s meant to be run at build time, you won’t be able to use data that’s only available during request time,
such as query parameters or HTTP headers. */

// Can only be exported from a page. You can’t export it from non-page files.
// Not suitable for data that updates frequently or changes on every user request.

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// Example get server side props
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <h1 className='title'>
        Read <Link href='/posts/first-post'>this page!</Link>
      </h1>
    </Layout>
  );
};

export default Home;
