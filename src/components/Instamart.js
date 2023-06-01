// this component will be lazy loaded it means, by default what happends bundlers bundle all files into only one js so it makes file size to big to load it is not good practice as loading such big files is not optimal we divide our code into differnec=nt bunndles by lazy loading or it has many differnt names

import { useState } from "react";

// const Section = ({ title, description }) => {
//     // this is a basic accordian
//     const [isVisible, setIsVisible] = useState(false);
//     return (
//         <div className="border-2 border-black p-3 m-3">
//             <p className="text-xl font-bold">{title}</p>
//             {isVisible ? (
//                 <button
//                     onClick={() => {
//                         setIsVisible(false);
//                     }}
//                 >
//                     Hide
//                 </button>
//             ) : (
//                 <button
//                     onClick={() => {
//                         setIsVisible(true);
//                     }}
//                 >
//                     Show
//                 </button>
//             )}
//             {isVisible && <p>{description} </p>}
//         </div>
//     );
// };

const Section = ({
    title,
    description,
    isVisible,
    setIsVisible,
    setIsHide,
}) => {
    // this is a collapsable accordian
    return (
        <div className="border-2 border-black p-3 m-3">
            <p className="text-xl font-bold">{title}</p>
            {isVisible ? (
                <button
                    onClick={() => {
                        setIsHide();
                    }}
                >
                    Hide
                </button>
            ) : (
                <button
                    onClick={() => {
                        setIsVisible();
                    }}
                >
                    Show
                </button>
            )}
            {isVisible && <p>{description} </p>}
        </div>
    );
};

const Instamart = () => {
    const [sectionVisible, setSectionVisible] = useState(""); // this is lifting the state up
    return (
        <>
            <h1 className="text-3xl font-bold p-3 m-3">Instamart!!</h1>
            <Section
                title="About Instamart"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                isVisible={sectionVisible === "about"}
                setIsVisible={() => {
                    setSectionVisible("about");
                }}
                setIsHide={() => {
                    setSectionVisible("");
                }}
            />
            <Section
                title="Instamart Team"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                isVisible={sectionVisible === "team"}
                setIsVisible={() => {
                    setSectionVisible("team");
                }}
                setIsHide={() => {
                    setSectionVisible("");
                }}
            />
            <Section
                title="Products"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                isVisible={sectionVisible === "product"}
                setIsVisible={() => {
                    setSectionVisible("product");
                }}
                setIsHide={() => {
                    setSectionVisible("");
                }}
            />
        </>
    );
};

export default Instamart;
