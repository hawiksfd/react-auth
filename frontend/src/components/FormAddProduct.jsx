import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormAddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/products', {
                name: name,
                price: price
            });
            navigate('/products')
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.msg);
            }

        }
    }

    return (
        <div>
            <h1 className='title'>Products</h1>
            <h2 className='subtitle'>Add New Product</h2>
            <div className='is-shadowless'>
                <div className='card-conten'>
                    <div className='content'>
                        <form onSubmit={saveProduct}>
                            <p className='has-text-centered'>{message}</p>
                            <div className='field'>
                                <label className='label'>Product Name</label>
                                <div className='control'>
                                    <input
                                        type="text"
                                        className='input'
                                        placeholder='Product Name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}

                                    />
                                </div>
                            </div>
                            <div className='field'>
                                <label className='label'>Price</label>
                                <div className='control'>
                                    <input
                                        type="text"
                                        className='input'
                                        placeholder='Price'
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}

                                    />
                                </div>
                            </div>

                            <div className='field '>
                                <div className='control'>
                                    <button type="submit" className='button is-success'>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FormAddProduct