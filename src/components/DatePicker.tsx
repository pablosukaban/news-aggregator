import React from 'react';

interface DatePickerProps {
    value: string;
    max: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker = (props: DatePickerProps) => {
    return (
        <input
            id='from-date'
            type='date'
            min={'2023-03-09'}
            {...props}
            className='cursor-pointer rounded-md border border-gray-400 bg-white p-1 shadow transition hover:border-gray-300'
        />
    );
};

export default DatePicker;
