import React from "react";
import imge from "../assets/tp.jpg";
const Content = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="m-1 flex flex-row sticky">
        <div className="rounded-md bg-gray-300 m-1 h-9 p-2 text-center">
          Filterr
        </div>
      </div>
      <div>
        <div className="mt-4 ml-6 flex flex-row justify-between items-center flex-wrap">
          <div className="w-80  max-h-80">
            <img src={imge} alt="videos" className="h-48 w-full rounded-lg" />
            <h3 className="p-1">
              Hellow This Is my Videos ghghghghhhgh ghghghg ghghgh hhghghg hghg
              hghhgh
            </h3>
            <h5 className="p-1 text-sm">Subscriber</h5>
            <h5 className="p-1 text-sm">3.4m views</h5>
          </div>
          <div className="w-80  max-h-80">
            <img src={imge} alt="videos" className="h-48 w-full rounded-lg" />
            <h3 className="p-1">
              Hellow This Is my Videos ghghghghhhgh ghghghg ghghgh hhghghg hghg
              hghhgh
            </h3>
            <h5 className="p-1 text-sm">Subscriber</h5>
            <h5 className="p-1 text-sm">3.4m views</h5>
          </div>
          <div className="w-80  max-h-80">
            <img src={imge} alt="videos" className="h-48 w-full rounded-lg" />
            <h3 className="p-1">
              Hellow This Is my Videos ghghghghhhgh ghghghg ghghgh hhghghg hghg
              hghhgh
            </h3>
            <h5 className="p-1 text-sm">Subscriber</h5>
            <h5 className="p-1 text-sm">3.4m views</h5>
          </div>
          <div className="w-80  max-h-80">
            <img src={imge} alt="videos" className="h-48 w-full rounded-lg" />
            <h3 className="p-1">
              Hellow This Is my Videos ghghghghhhgh ghghghg ghghgh hhghghg hghg
              hghhgh
            </h3>
            <h5 className="p-1 text-sm">Subscriber</h5>
            <h5 className="p-1 text-sm">3.4m views</h5>
          </div>
          <div className="w-80  max-h-80">
            <img src={imge} alt="videos" className="h-48 w-full rounded-lg" />
            <h3 className="p-1">
              Hellow This Is my Videos ghghghghhhgh ghghghg ghghgh hhghghg hghg
              hghhgh
            </h3>
            <h5 className="p-1 text-sm">Subscriber</h5>
            <h5 className="p-1 text-sm">3.4m views</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
