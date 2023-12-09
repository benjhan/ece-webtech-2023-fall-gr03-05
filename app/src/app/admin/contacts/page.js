"use client"
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js';
import { supabase } from '../../components/SupabaseClient';

export default function Contacts() {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        (async () => {
            let { data, error, status } = await supabase
                .from('contacts')
                .select(`id, firstname, lastname, email`)
   
            if (error) {
                console.error('Error fetching data:', error)
                return
            }
            setContacts(data)
        })()
    }, [])

    return (
        <div>
            <h1 className='wt-title'>
                List of contact messages
            </h1>
            <div className="not-prose -my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-slate-300">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6">
                                        Firstname
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                                        Lastname
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                                        Email
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 bg-white">
                                {contacts.length === 0 ? (
                                    <tr>
                                        <td colSpan="4">No contact found</td>
                                    </tr>
                                ) : contacts.map((contact) => (
                                    <tr key={contact.email}>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{contact.firstname}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{contact.lastname}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{contact.email}</td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}
