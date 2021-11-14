import React, { useContext } from "react";
import PersonContext from "../contexts/PersonContext";

export default function Example8() {
    const persons = useContext(PersonContext);

    return (
        <ul>
            {persons.map((person) => (
                <li>{person.name}</li>
            ))}
        </ul>
    )
}
