function Navbar(){
return(
    <div>
        <div className="bg-blue-800 w-full h-2"> </div>
    <nav className="flex items-center justify-between flex-wrap bg-red-400 p-10">
        <div>
            <span className="text-white font-bold text-3xl mx-9">Kalvium</span>
            <span className="text-gray-500 font-bold mx-5 text-2xl">About Us</span>
            <span className="text-gray-500 font-bold mx-5 text-2xl">Contacts</span>
            <span className="text-gray-500 font-bold mx-5 text-2xl">Courses</span>
        </div>
        <div>
            <button className="text-white m-4 rounded-lg border border-white-300 px-4 py-2">Login</button>
        </div>
    </nav>
    <button className="bg-blue-500 text-white font-bold px-6 py-3 rounded-sm mx-20 my-10">Button one</button>
    </div>
)
}


export default Navbar