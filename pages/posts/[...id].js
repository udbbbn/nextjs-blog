import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({postData}) {
    return <Layout>
        <Head><title>{postData?.title}</title></Head>
        <br />
        <article>
            <h1 className={utilStyles.headingXl} >{postData?.id}</h1>
            <div className={utilStyles.lightText}>
              {postData?.date &&<Date dateString={postData.date}></Date>}
            </div>
        <div dangerouslySetInnerHTML={{__html: postData?.contentHtml}}></div>
        </article>
    </Layout>
}

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}