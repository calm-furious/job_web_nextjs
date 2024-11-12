'use client'

import { useState } from 'react'

export default function Apply() {
    const [file, setFile] = useState<File | null>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0])
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Here you would typically send the form data to your backend
        console.log('Form submitted', file)
        // Reset form
        setFile(null)
        event.currentTarget.reset()
    }

    return (
        <div className="min-h-screen bg-base-200">

            <main className="container mx-auto py-6 px-4">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Submit Your Application</h2>
                        <p className="text-base-content/70">Interested in joining our team? Submit your resume below.</p>
                        <form onSubmit={handleSubmit} className="mt-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="John Doe" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full mt-4">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="john@example.com" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full mt-4">
                                <label className="label">
                                    <span className="label-text">Position</span>
                                </label>
                                <input type="text" name="position" placeholder="Position you're applying for" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full mt-4">
                                <label className="label">
                                    <span className="label-text">Cover Letter</span>
                                </label>
                                <textarea name="message" placeholder="Tell us why you're interested in this position" className="textarea textarea-bordered h-24"></textarea>
                            </div>
                            <div className="form-control w-full mt-4">
                                <label className="label">
                                    <span className="label-text">Resume</span>
                                </label>
                                <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="file-input file-input-bordered w-full" required />
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="btn btn-primary w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}