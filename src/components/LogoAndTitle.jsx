import "../index.css";

function LogoAndTitle({ size }) {

    let logoSize, textSize, paddingBottom;

    if (size === "large") {
        logoSize = "w-16 h-16";
        textSize = "text-6xl";
        paddingBottom = "";
    } else if (size === "medium") {
        logoSize = "w-14 h-14";
        textSize = "text-4xl";
        paddingBottom = "";
    } else if (size === "small") {
        logoSize = "w-10 h-10";
        textSize = "text-2xl";
        paddingBottom = "pb-2";
    }

    return (

        <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center">
                <img className={`${logoSize} ${paddingBottom} align-middle`} src="/logo.svg" alt="Logo"/>
                <h1 className={`font-bold ${textSize} align-middle`}>Track-It</h1>
            </div>
        </div>

    );

}

export default LogoAndTitle;