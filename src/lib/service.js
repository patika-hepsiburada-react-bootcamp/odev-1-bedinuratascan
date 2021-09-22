import axios from 'axios'

const getData = async (userId) => {
    try {
        // The data is retrieved asynchronously by requesting to the url.
        const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        // The fetched data was merged and returned by using spread operator.
        return {
            ...user,
            posts
        }
    } catch (error) {
        console.log(error.message)
    }
}

export default getData;