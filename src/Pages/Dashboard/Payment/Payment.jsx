const Payment = () => {
    return (
        <div className="my-10">
            <h1>Fill Card INFO</h1>
            <input type="text" placeholder="5984-6547-0987-5678" className="input input-bordered input-success w-full max-w-xs mb-4" />
            <input type="text" placeholder="__/ __/ " className="input input-bordered input-success w-full max-w-xs mb-4" /> <br />
            <button className="btn btn-outline mx-auto">Submit</button>
        </div>
    );
};

export default Payment;