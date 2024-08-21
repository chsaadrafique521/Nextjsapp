import React from 'react';

const Testimonial = () => {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img 
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
        src="saad.PNG" 
        alt="Saad Rafique" 
        width="384" 
        height="512" 
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
            "I am Saad Rafique from rahim yar khan. Doing MS Chemistry from Khwaja Fareed University ."
          </p>
        </blockquote>
        <figcaption className="font-medium text-gray-800 dark:text-gray-200">
          <div className="text-sky-500 dark:text-sky-400">
            SAAD RAFIQUE
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            MASTER OF SCIENCE IN CHEMISTRY FROM KHAWA FAREED UNIVERSITY
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Testimonial;
