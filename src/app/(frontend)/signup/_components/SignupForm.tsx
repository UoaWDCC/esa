export default function SignupForm() {
    // Proof of payment field is not entered. Presumably done later after the payment is made.
    return (
        <div>
            <form>
                <input type="hidden" id="timestamp" name="timestamp" value={new Date().toISOString()} />
                <input type="hidden" id="membershipPayment" name="membershipPayment" value="Bank transferred"/>
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" id="firstName" name="firstName" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="text" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label htmlFor="studentID" className="block text-sm font-medium text-gray-700">Student ID</label>
                    <input type="text" id="studentID" name="studentID" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label htmlFor="upi" className="block text-sm font-medium text-gray-700">UPI</label>
                    <input type="text" id="upi" name="upi" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label htmlFor="yearOfStudy" className="block text-sm font-medium text-gray-700">Year Of Study</label>
                    <select
                        id="yearOfStudy"
                        name="yearOfStudy"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="" className="text-black">Select year of study</option>
                        <option value="1st Year" className="text-black">1st Year</option>
                        <option value="2nd Year" className="text-black">2nd Year</option>
                        <option value="3rd Year" className="text-black">3rd Year</option>
                        <option value="4th Year+" className="text-black">4th Year+</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="ethnicity" className="block text-sm font-medium text-gray-700">Ethnicity</label>
                    <input type="text" id="ethnicity" name="ethnicity" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label htmlFor="membershipCardNumber" className="block text-sm font-medium text-gray-700">Membership Card Number</label>
                    <input type="text" id="membershipCardNumber" name="membershipCardNumber" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label htmlFor="convincedByCommitteeMember" className="block text-sm font-medium text-gray-700">Which ESA committee member convinced you to sign-up?</label>
                    <input type="text" id="convincedByCommitteeMember" name="convincedByCommitteeMember" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700">Person who referred you (Full Name) - if applicable</label>
                    <input type="text" id="referrerName" name="referrerName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
                    <textarea id="notes" name="notes" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Submit</button>
            </form>
        </div>
    );
}