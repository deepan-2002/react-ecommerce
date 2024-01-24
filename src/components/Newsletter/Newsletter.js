import './Newsletter.css'

const Newsletter = () => {
    return (
        <>
            <div className="container section-container newsletter bg-light rounded text-center mb-4 p-4">
                <h2>Get Notified about New Products and Offers</h2>
                <br />
                <p>Subscribe to our newsletter and get notified in email</p>
                <div className='input-container'>
                <input type="text" placeholder="Your email ID" />
                <button className='bg'>Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default Newsletter