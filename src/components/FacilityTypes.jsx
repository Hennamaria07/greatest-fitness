import React from 'react';
import { facilityDataMain, facilitySubData } from '../data/data';

const YogaCategory = ({ type }) => {
  const Dataset = facilityDataMain.filter((item) => item.type === type);
  const SubDataset = facilitySubData.filter((item) => item.type === type);

  return (
    <>
      {Dataset.map((item, i) => (
        <div key={i} className='grid gap-10 lg:grid-cols-2'>
          <div className="grid-items w-full lg:grid hidden">
            <div className="image-wrapper rounded-lg max-w-full lg-max-h-80vh xl-max-h-80vh"  >
              <img
                src={item.Image}
                className='mx-auto w-full h-full object-cover'
                alt="yoga image"
              />
            </div>
          </div>
          <div className="grid-items text-center lg:text-justify">
            <h4 className='text-2xl font-semibold'>{item.title}</h4>
            <p className='leading-6 py-3 text-justify text-green-700'>{item.des}</p>
            <div className='grid md:gap-x-10 md:grid-cols-2'>
              {SubDataset.map((item, i) => (
                <div className="grid-items mx-auto md:mx-0 pt-5" key={i}>
                  <img
                    src={item.icon}
                    className='mx-auto md:mx-0'
                    alt="number icon"
                  />
                  <p className='text-lg text-center md:text-justify pt-2 font-semibold'>{item.subTitle}</p>
                  <p className='leading-6 text-justify text-sm py-3 text-green-700'>{item.subDes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export const Beginners = () => <YogaCategory type={0} />;
export const Stretching = () => <YogaCategory type={1} />;
export const Fly = () => <YogaCategory type={2} />;
export const Yin = () => <YogaCategory type={3} />;
export const Flow = () => <YogaCategory type={4} />;
