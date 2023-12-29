'use client'
import {Stream} from "@/components/stream";
import Results from "@/components/results";

const MainPage = () => {
    return (
        <div className="main">
            <Results />
            <Stream/>
        </div>
    );
};

export default MainPage;