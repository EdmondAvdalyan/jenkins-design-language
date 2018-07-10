import * as React from 'react';
import { IconProps } from './IconProps';
export function User({className, size = 24, width = size, height = size}: IconProps) {
    return (
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}><path d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 1 0-9-9c0 1.292.272 2.521.763 3.632 1.212-1.52 2.739-2.641 4.814-3.21a4.5 4.5 0 1 1 6.827.021 9.532 9.532 0 0 1 3.133 1.529 1 1 0 0 1-1.195 1.603C16.001 14.575 14.262 14 12 14c-3.619 0-5.634 1.309-7.128 3.496A8.985 8.985 0 0 0 12 21zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" fill="#343A3C" fillRule="evenodd" clipRule="evenodd"></path></svg>
    );
}
