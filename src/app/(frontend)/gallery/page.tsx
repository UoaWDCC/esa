import Gallery from "./_components/Gallery";

export default function gallery() {
    return (
        <div className="flex flex-col mt-[10vw] items-center">
            <h2 className="text-primary-red" >Gallery</h2>
            <Gallery /> 
        </div>
    );
}
