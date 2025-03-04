import "../index.css";
import LogoAndTitle from "./LogoAndTitle";

function Header() {
    return (
        <header className="bg-gray-900 flex justify-between m-10 p-4">
            <LogoAndTitle size="small" />

            <nav>
                <ul className="flex justify-end">
                    <li><p className="hover:underline cursor-pointer">About</p></li>
                    <li><p className="hover:underline cursor-pointer ml-24">Settings</p></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
