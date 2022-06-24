import Logo from '../assets/logo-ignite.svg'

function Header() {
    return ( 
        <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
            <img src={Logo}/>
        </header>

     );
}

export default Header;

