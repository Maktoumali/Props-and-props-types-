import React from 'react'
import useFetch from './useFetch'

const FetchHookUseCase = () => {
    const [data] = useFetch('https://dummyjson.com/products')
    console.log(data)
    return (
        <div>
            <table>

                <tr>
                    <th>Title</th>
                    <th>ID</th>
                    <th>Stock</th>
                    <th>Rating</th>
                </tr>

                {data &&
                    data.products.map((user) => (
                        <tr key={user.id}>
                            <td>{user.title}</td>
                            <td>{user.id}</td>
                            <td>{user.stock}</td>
                            <td>{user.rating}</td>
                        </tr>
                    ))}
            </table>

        </div>
    )
}

export default FetchHookUseCase