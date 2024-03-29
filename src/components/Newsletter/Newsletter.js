import './Newsletter.css'

const Newsletter = () => {
    return (
        <>
            <div className="container section-container newsletter bg-light rounded text-center my-4 p-4">
                <h2>Get Notified about New Products and Offers</h2>
                <br />
                <p>Subscribe to get notified in email</p>
                <div className='input-container'>
                <input type="email" name='email' placeholder="Your email ID" />
                <button className='text-bg-dark'>Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default Newsletter