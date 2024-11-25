"use client"
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ProgressBar = ({ name,percentage }) => {
  const [width, setWidth] = useState(0);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      setWidth(percentage);
    }
  }, [percentage, inView]);

  const customEasing = 'cubic-bezier(0.4, 0, 0.2, 1)';

  return (
    <div className="space-y-1.5">
        <div className="flex justify-between font-medium">
                <span>{name}</span>
                <span>{percentage}%</span>
        </div>
        <div ref={ref} className="w-full bg-gray-200 dark:bg-gray-700 h-1 mb-4 ">
        <div
            className="bg-gray-800 dark:bg-gray-200 h-1 "
            style={{ width: `${width}%`, transition: inView ? `width 1.5s ${customEasing}` : 'none' }}
        ></div>
        </div>
    </div>
  );
};

export default ProgressBar;
