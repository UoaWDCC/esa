import CafeDrinksFolder from './_components/CafeDrinksFolder';
import RestaurantsFolder from './_components/RestaurantsFolder';
import EntertainmentFolder from './_components/EntertainmentFolder';
import RetailOtherFolder from './_components/RetailOtherFolder';
import GuideFolder from './_components/GuideFolder';

export default function sponsors() {
    return (
        <div className="relative w-full h-330 mt-[350px]">
            {/* Each component positioned absolutely with different top values */}
            <div className="absolute top-0 w-full z-5">
                <CafeDrinksFolder />
            </div>

            <div className="absolute top-[200px] w-full z-10">
                <RestaurantsFolder />
            </div>

            <div className="absolute top-[400px] w-full z-15">
                <EntertainmentFolder />
            </div>

            <div className="absolute top-[600px] w-full z-20">
                <RetailOtherFolder />
            </div>

            <div className="absolute top-[800px] w-full z-25">
                <GuideFolder />
            </div>
        </div>
    );
}
