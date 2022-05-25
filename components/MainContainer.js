import MyLink from "./MyLink";
import Head from "next/head";

const MainContainer = ({children}) => {
    return (
        <>
            <Head>
                <title>NextJS</title>
            </Head>
            <nav>
                <MyLink href="/" text="Home"/>
                <MyLink href="/users" text="Users"/>
            </nav>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;