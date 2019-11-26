import Link from 'next/link';
import Layout from '../components/Layout';
import {authInitialProps} from '../lib/auth';

export default function Index(props) {
    return(
        <Layout title="Home" {...props}>
            <Link href="/profile">
                <a>Go to profile</a>
            </Link>
        </Layout>
    );
}

Index.getInitialProps = authInitialProps();