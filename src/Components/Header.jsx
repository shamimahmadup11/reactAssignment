

const Header = () => {
    return (
        <>
            <h1 className="text-red-900 font-bold text-4xl text-left ml-10">Family Wellness</h1>
            <h3 className="text-left ml-10 mt-6">MESSAGE THERAPY</h3>
            <div className="bg-red-500">
                <ul className="flex justify-between m-10 my-5">
                    <li className=" bg-red-900 px-5 py-3 text-white font-bold font-sans ">HOME</li>
                    <li className=" bg-red-900 px-5 py-3 text-white font-bold font-sans">ABOUT</li>
                    <li className=" bg-red-900 px-5 py-3 text-white font-bold font-sans">SERVICE</li>
                    <li className=" bg-red-900 px-5 py-3 text-white font-bold font-sans">FAQ</li>
                    <li className=" bg-red-900 px-5 py-3 text-white font-bold font-sans">CONTACT</li>
                </ul>
            </div>
        </>
    );
}

export default Header;