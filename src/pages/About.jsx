import queryString from "query-string";

export default function About(props) {
    const searchParams = props.location.search;
    const query = queryString.parse(searchParams);

    console.log(query);

    return (
        <div>
            <p>About</p>
            {query.name && <p>name은 {query.name} 입니다. </p>}
        </div>
    );
}
