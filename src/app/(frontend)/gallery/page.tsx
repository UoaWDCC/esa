import Gallery from "./_components/Gallery";

export default function GalleryPage() {
    return (
        <div className="flex flex-col px-0 md:px-[8%] py-28 items-center">
            <h2 className="text-primary-red px-[20vw]">Gallery</h2>
            <div className="w-full mx-auto text-center text-primary-white flex flex-col items-center tracking-widest">
                <p className="text-primary-white mb-2">View our event images here!</p>
            </div>
            <hr className="mx-auto mt-4 w-[1200px] h-px border-0 bg-white/50 mb-15" />
            <Gallery /> 
        </div>
    );
}
