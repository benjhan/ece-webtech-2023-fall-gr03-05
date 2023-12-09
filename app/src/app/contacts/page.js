"use client"
import { useState } from 'react'
import {supabase} from "../components/SupabaseClient"


export default function Page() {
  

    const [message, setMessage] = useState(null)

    const onSubmit = async function (e) {
        e.preventDefault()
        // Insert contact record into the contacts database
        // Print a friendly confirmation message
        const formData = new FormData(e.target);
        const firstname = formData.get('firstname');
        const lastname = formData.get('lastname');
        const email = formData.get('email');
        const message = formData.get('message');

        const { data, error } = await supabase
            .from('contacts')
            .insert([
                { firstname: firstname, lastname: lastname, email: email, message: message }
            ]);

        if (error) {
            console.error('Error inserting data: ', error);
        } else {
            console.log('Data inserted: ', data);
        }
    }
    return (
        <div>
            <h1 className='wt-title'>
                Contacts
            </h1>
            <form className="[&_span]:block grid gap-3" onSubmit={onSubmit}>
                <div>
                    <label>
                        <span>First name</span>
                        <input type="text" name="firstname" />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Last name</span>
                        <input type="text" name="lastname" />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Email</span>
                        <input type="text" name="email" />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Message</span>
                        <textarea name="message" />
                    </label>
                </div>
                <div>
                    <button
                        className="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500"
                    >
                        Send
                    </button>
                </div>
            </form>
            {message &&
                <div
                    aria-label="Overlow below the drawer dialog"
                    className="fixed inset-0 bg-black/80 flex items-center justify-center"
                    onClick={() => setMessage(null)}
                    role="dialog"
                >
                    <div
                        aria-label="Alert pane"
                        className="max-h-[90vh] max-w-[95vw] overflow-auto p-4 prose bg-white"
                    >
                        {message}
                    </div>
                </div>
            }
        </div>
    )
}