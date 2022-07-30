import React from 'react'

function Table(props) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.product.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">1</th>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;