
const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-68px)]">
            <p className="text-7xl font-thin ">L</p>
            <div className="h-10 w-10 border-8 border-dashed rounded-full border-blue-500 animate-spin mt-5"></div>
            <p className="font-thin text-7xl">ading...</p>
        </div>
    );
};

export default LoadingSpinner;