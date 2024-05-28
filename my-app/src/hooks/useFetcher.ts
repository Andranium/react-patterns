import {UserProps} from "../components/memberCard/types";

export function useFetcher() {
    function fetchData(callback: (res: UserProps) => void) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((res) => callback(res));
    }

    function postData(
        data: { username: string; phone: string; website: string },
        callback: (user: UserProps) => void) {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((user) => callback(user));
    }

    return {fetchData, postData};
}
