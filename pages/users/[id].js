import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";

export default function ({user}) {
    const {query} = useRouter()
    return (
        <MainContainer  >
            <h1>пользователь с id {query.id}</h1>
            <h2>имя пользователя - {user.name}</h2>
        </MainContainer>
    )
};

export async function getServerSideProps({params}){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
    return{
        props: {user},
    }

}