export const FinanceForm = () => {
    return(
        <div className="form-container">
            <form>
                <div className="form-field">
                    <label>Description: </label>
                    <input type="text" required className="input" />
                </div>
                <div className="form-field">
                    <label>Amount: </label>
                    <input type="text" required className="input" />
                </div>
                <div className="form-field">
                    <label>Category: </label><br/>
                    <input type="radio" required className="input" />
                    <label>Food</label>
                    <input type="radio" required className="input" />
                    <label>Gas</label>
                    <input type="radio" required className="input" />
                    <label>Shopping</label>
                    <input type="radio" required className="input" />
                    <label>Mortgage</label>
                    <input type="radio" required className="input" />
                    <label>Pets</label>
                </div>
                <div className="form-field">
                    <input type="submit"/>
                </div>
            </form>
        </div>
    ); 
};