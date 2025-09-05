import Gallery from "./_components/Gallery";

export default function gallery() {
    return (
        <div className="flex flex-col mt-[10vw] items-center">
            <h2 className="text-primary-red border-b-2 border-white mb-[2vw] px-[20vw]">Gallery</h2>
            <Gallery /> 
        </div>
    );
}
