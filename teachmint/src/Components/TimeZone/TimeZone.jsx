import React, { useEffect, useState } from 'react';
import { fetchCountriesRequest } from '../../store/countries/action';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTimeRequest } from '../../store/timeZone/action';
import { DateTime } from 'luxon';
import './TimeZone.css'
import DigitalClock from '../DigitalClock/DigitalClock';

export default function TimeZone() {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries?.countries);
    const time = useSelector((state) => state?.time);
    const [hour, setHour] = useState(null);
    const [minute, setMinute] = useState(null);
    const [second, setSecond] = useState(null);
    console.warn(hour, minute, second);
    useEffect(() => {
        dispatch(fetchCountriesRequest());
    }, [dispatch]);

    const [selectedCountry, setSelectedCountry] = useState('Indian/Chagos');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    useEffect(() => {
        if (selectedCountry) {
            dispatch(fetchTimeRequest(selectedCountry));
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (time && time.time && time.time.utc_datetime) {
            const dateTime = DateTime.fromISO(time.time.utc_datetime).setZone(selectedCountry);
            setHour(dateTime.hour);
            setMinute(dateTime.minute);
            setSecond(dateTime.second);
            console.warn(selectedCountry);
        }
    }, [time, selectedCountry, dispatch]);

    return (
        <div className="clock-container">
            <div className="clock">
                {hour !== null && minute !== null && second !== null ? (
                    <DigitalClock hour={hour} minute={minute} second={second} />
                ) : (
                    'Select a country to see the time'
                )}
            </div>
            <div className="country-dropdown">
                <label htmlFor="countrySelect">Select a Country:</label>
                <select
                    id="countrySelect"
                    value={selectedCountry}
                    onChange={handleCountryChange}

                >
                    <option value="Indian/Chagos">Indian/Chagos</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
