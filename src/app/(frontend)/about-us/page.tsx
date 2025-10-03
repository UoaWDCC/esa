import AboutUs from './_components/AboutUs';
import JoinExecTeam from './_components/JoinExecTeam';
import MeetExecs from './_components/MeetExecs';

export default function aboutUs() {
    return (
        <div className="flex flex-col w-full">
            <div>
                <AboutUs />
            </div>

            <div>
                <MeetExecs />
            </div>

            <div>
                <JoinExecTeam />
            </div>
        </div>
    );
}
