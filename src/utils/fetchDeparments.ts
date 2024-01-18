import DEPARTMENT from "../types/department";

async function fetchDeparments(): Promise<DEPARTMENT[]> {
    const response = await fetch("/data/departments.json");
    const data = await response.json();

    return data;
}

export default fetchDeparments;