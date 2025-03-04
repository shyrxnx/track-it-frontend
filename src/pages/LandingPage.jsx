import { Link } from "react-router-dom";
import "../index.css";
import LogoAndTitle from "../components/LogoAndTitle";

function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
            {/* Logo and Title */}
            <LogoAndTitle size="large" />

            {/* Description */}
            <p className="mt-8 text-lg max-w-3xl text-center mb-6 font-normal text-gray-500 dark:text-gray-400">
                Track-It is a web-based habit tracker that helps users build and maintain daily routines with
                insightful analytics and progress tracking.
            </p>

            {/* Button */}
            <div className="mt-8">
                <Link to="/dashboard">
                    <button className="transition duration-300">
                        Start Tracking
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;
