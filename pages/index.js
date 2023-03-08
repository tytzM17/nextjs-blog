import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle} &#9774;</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>how to be a taoist?
Taoism is an ancient Chinese philosophy that emphasizes living in harmony with the Tao, or the natural way of the universe. Here are some steps you can take to begin practicing Taoism:

Study Taoist teachings: Read books about Taoism, such as the Tao Te Ching, the Zhuangzi, and the Liezi, to gain a deeper understanding of Taoist philosophy.

Embrace simplicity: Taoism emphasizes living a simple, uncluttered life. Try to simplify your surroundings, your schedule, and your possessions.

Practice meditation: Taoist meditation techniques, such as breathing exercises and mindfulness, can help you connect with the natural world and achieve a state of inner peace.

Cultivate compassion: Taoism teaches that kindness and compassion are essential virtues. Practice empathy and compassion in your interactions with others.

Live in harmony with nature: Taoists believe in living in harmony with the natural world. Spend time in nature, cultivate a garden, and reduce your environmental impact.

Let go of attachments: Taoism emphasizes letting go of attachments and desires. Practice detachment by accepting what comes and goes in your life without judgment or resistance.

Emphasize the present moment: Taoism teaches that the present moment is the only reality. Focus on the present and try to be mindful of your thoughts and actions.

Remember that Taoism is a personal practice, and everyone's path may look different. Find what works best for you and embrace the principles of simplicity, compassion, and harmony with nature.</p>

      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            // <li className={utilStyles.listItem} key={id}>
            //   {title}
            //   <br />
            //   {id}
            //   <br />
            //   {date}
            // </li>
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
