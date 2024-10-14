import React, { useState } from "react";
import SearchBox from "../../components/AucNetComponents/SearchBox";
import SuperStatusBullet from "../../components/AucNetComponents/AdminComponents/SuperStatusBullet";
import DropDown from "../../components/AucNetComponents/DropDown";

const adminPage: React.FC = () => {
  const [activeBullet, setActiveBullet] = useState<string>('All');

  const handleBulletClick = (bulletTitle: string) => {
    setActiveBullet(bulletTitle);
  };

  const status: string[]=[]

  return (
    <div className="w-full h-fit min-h-screen px-8 md:px-16 lg:px-32 pt-24 bg-slate-50">
      <div className="flex gap-2">
      {[
        { title: 'New', color: 'bg-yellow-200 border-yellow-300', count: 100 },
        { title: 'Approved', color: 'bg-amber-200 border-amber-300', count: 100 },
        { title: 'Qualified', color: 'bg-orange-300 border-orange-400', count: 100 },
        { title: 'Processed', color: 'bg-green-300 border-green-400', count: 100 },
        { title: 'Finished', color: 'bg-blue-200 border-blue-300', count: 100 },
        { title: 'All', color: 'bg-gray-200 border-gray-300', count: 100 },
      ].map((bullet) => (
        <SuperStatusBullet
          key={bullet.title}
          title={bullet.title}
          activeColor={bullet.color}
          isActive={activeBullet === bullet.title}
          count={bullet.count}
          onClick={() => handleBulletClick(bullet.title)}
        />
      ))}
        <SearchBox
          customClass="border border-gray-200 h-10 bg-white w-96"
          placeholder="Free Text Filter"
        />
      </div>

      <div className="flex gap-2">
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Status</p>
          <DropDown options={status}/>
        </div>
      </div>
    </div>
  );
};

export default adminPage;
