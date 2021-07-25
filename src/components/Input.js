import React, { Fragment, useState } from 'react'

function Input() {


    const [ description, setDescription] = useState("start typing");


   const  onSubmitForm = async e => {

        e.preventDefault();

        try {

            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            }
            );

            window.location = "/";
            
        } catch (err) {

            console.err(err.message)
            
        }
    }






    return (

        <Fragment>

<h1 className="text-center mt-5">Todo List for today

</h1>
    <form className="d-flex mt-5" onSubmit={onSubmitForm}> 
    
    
    {/* // connect to the form */}

        <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
            <button className="btn btn-success">Add</button>
        



    </form>





        </Fragment>
    );
        
};

export default Input
