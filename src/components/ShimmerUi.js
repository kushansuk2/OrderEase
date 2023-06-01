import ShimmerCard from "./ShimmerCard";

const ShimmerUi = () => {
    return (
        <div className="">
            {Array(10)
                .fill(" ")
                .map((curr,index) => {
                    return <ShimmerCard key={index}/>;
                })}
        </div>
    );
};

export default ShimmerUi;
