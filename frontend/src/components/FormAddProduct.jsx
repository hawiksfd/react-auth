import React from 'react'

const FormAddProduct = () => {
    return (
        <div>
            <h1 className='title'>Products</h1>
            <h2 className='subtitle'>Add New Product</h2>
            <div className='is-shadowless'>
                <div className='card-conten'>
                    <div className='content'>
                        <form >
                            <div className='field'>
                                <label className='label'>Product Name</label>
                                <div className='control'>
                                    <input type="text" className='input' placeholder='Email' />
                                </div>
                            </div>
                            <div className='field'>
                                <label className='label'>Price</label>
                                <div className='control'>
                                    <input type="text" className='input' placeholder='Name' />
                                </div>
                            </div>

                            <div className='field '>
                                <div className='control'>
                                    <button className='button is-success'>
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