import { wrapContent } from '../../../utils/iframe';

export const BreakpointsDemo = () => (
    <div className="bg-indigo-200">
        <div className="row">
            <div className="col-3 bg-indigo-500 text-indigo-100 u-shadow-lg u-round-sm m-1 p-4">col-3</div>
            <div className="col-3 bg-indigo-500 text-indigo-100 u-shadow-lg u-round-sm m-1 p-4">col-3</div>
            <div className="col-3 bg-indigo-500 text-indigo-100 u-shadow-lg u-round-sm m-1 p-4">col-3</div>
        </div>
        <div className="row">
            <div className="sm:col-3 bg-indigo-500 text-indigo-100 u-shadow-lg u-round-sm m-1 p-4">sm:col-3</div>
            <div className="sm:col-3 bg-indigo-500 text-indigo-100 u-shadow-lg u-round-sm m-1 p-4">sm:col-3</div>
            <div className="sm:col-3 bg-indigo-500 text-indigo-100 u-shadow-lg u-round-sm m-1 p-4">sm:col-3</div>
        </div>
        <div className="row">
            <div className="md:col-3 bg-indigo-500 text-indigo-100 u-shadow-lg u-round-sm m-1 p-4">
                md:col-3
            </div>
            <div className="md:col-3 bg-indigo-500 text-indigo-100 u-shadow-lg u-round-sm m-1 p-4">
                md:col-3
            </div>
            <div className="md:col-3 bg-indigo-500 text-indigo-100 u-shadow-lg u-round-sm m-1 p-4">
                md:col-3
            </div>
        </div>
        <div className="row">
            <div className="lg:col-3 bg-indigo-500 text-indigo-100 u-shadow-lg u-round-sm m-1 p-4">lg:col-3</div>
            <div className="lg:col-3 bg-indigo-500 text-indigo-100 u-shadow-lg u-round-sm m-1 p-4">lg:col-3</div>
            <div className="lg:col-3 bg-indigo-500 text-indigo-100 u-shadow-lg u-round-sm m-1 p-4">lg:col-3</div>
        </div>
        <div className="row">
            <div className="xl:col-3 bg-indigo-500 text-indigo-100 u-shadow-lg u-round-sm m-1 p-4">xl:col-3</div>
            <div className="xl:col-3 bg-indigo-500 text-indigo-100 u-shadow-lg u-round-sm m-1 p-4">xl:col-3</div>
            <div className="xl:col-3 bg-indigo-500 text-indigo-100 u-shadow-lg u-round-sm m-1 p-4">xl:col-3</div>
        </div>
    </div>
);
