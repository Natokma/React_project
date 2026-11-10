import { useState } from "react"

function ContactForm(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        contactMe: '',
        isAccess: true
    })

    const [error, setError] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        contactMe: '',
        isAccess: ''
    })

    function handleChange(event){
        const { name, value, type, checked } = event.target

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))

        setError(prev => ({
        ...prev,
        [name]: ''
       }))
    }

    function handleSubmit(event){
    event.preventDefault();

    const newErrors = {
        name: '',
        email: '',
        phone: '',
        message: '',
        contactMe: '',
        isAccess: ''
    }

    if(!formData.name.trim()){
       newErrors.name = 'Name is required.'
    }

    if(!formData.email.trim()){
        newErrors.email = 'Email is required.'
    }

    setError(newErrors)

    if(newErrors.name || newErrors.email){
        return
    }

    setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        contactMe: '',
        isAccess: true
    })
}
    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mb-5">
            <h2 className="text-2xl font-bold mt-5 text-[#643939]">Contact Us</h2>
            <div className="flex flex-row items-start justify-center gap-8 w-full max-w-4xl">
                 <div className="flex flex-col gap-4 w-1/2 mt-5">
                    <input
                        className="border rounded-2xl h-10 px-3 w-full"
                        name="name"
                        type="text"
                        placeholder="Type your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {error.name && <p className="text-red-600">{error.name}</p>}
                    <input
                        className="border rounded-2xl h-10 px-3 w-full"
                        type="email"
                        name="email"
                        placeholder="Type your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {error.email && <p className="text-red-600">{error.email}</p>}
                    <input
                        className="border rounded-2xl h-10 px-3 w-full"
                        type="tel"
                        name="phone"
                        placeholder="+374-xx-xx-xx-xx"
                        pattern="\+374-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <select
                        className="border rounded-2xl h-10 px-3 w-full"
                        name="contactMe"
                        value={formData.contactMe}
                        onChange={handleChange}
                    >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                    </select>
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="isAccess"
                            onChange={handleChange}
                            checked={formData.isAccess}
                        />
                        Access ...
                    </label>
                    <button type="submit" className="bg-[#643939] border border-[#643939] rounded-xl h-10 hover:bg-[#4d2b2b] text-white cursor-pointer hover:scale-105 active:scale-100 transition-all duration-200"> Submit </button>
                </div>
                <div className="w-1/2 mt-5">
                    <textarea
                        name="message"
                        className="border rounded-2xl p-3 w-full h-64 resize-y"
                        placeholder="Type your message..."
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </form>
    )
}

export default ContactForm