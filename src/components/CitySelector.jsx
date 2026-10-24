import { useState, useEffect } from 'react';
import {
    Autocomplete,
    TextField,
    Stack,
} from '@mui/material';
import { GetCountries, GetCity, GetState } from 'react-country-state-city';

export default function CitySelector({ onChange, sx }) {
    const [country, setCountry] = useState(null);
    const [currentState, setCurrentState] = useState(null);
    const [city, setCity] = useState(null);
    const [countriesList, setCountriesList] = useState([]);
    const [stateList, setStateList] = useState([]);
    const [citiesList, setCitiesList] = useState([]);

    useEffect(() => {
        GetCountries().then((result) => {
            setCountriesList(result);
        });
    }, []);

    useEffect(() => {
        if (!country) {
            return;
        }
        GetState(country.id).then((result) => {
            setStateList(result);
        });
    }, [country]);

    useEffect(() => {
        if (!country || !currentState) {
            return;
        }
        GetCity(country.id, currentState.id).then((result) => {
            setCitiesList(result);
        });
    }, [country, currentState]);

    return (
        <Stack spacing={2} sx={{ width: '100%', maxWidth: 300, ...sx }}>
            <Autocomplete
                disablePortal
                fullWidth
                options={countriesList}
                value={country}
                onChange={(event, newValue) => {
                    setCountry(newValue);
                    setCurrentState(null);
                    setCity(null);
                    setStateList([]);
                    setCitiesList([]);
                    onChange?.({ country: newValue, state: null, city: null });
                }}
                getOptionLabel={(option) => option.name || ''}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => <TextField {...params} label="Country" />}
            />
            <Autocomplete
                disablePortal
                fullWidth
                options={stateList}
                value={currentState}
                disabled={!country || stateList.length === 0}
                onChange={(event, newValue) => {
                    setCurrentState(newValue);
                    setCity(null);
                    setCitiesList([]);
                    onChange?.({ country, state: newValue, city: null });
                }}
                getOptionLabel={(option) => option.name || ''}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => <TextField {...params} label="State" />}
            />
            <Autocomplete
                disablePortal
                fullWidth
                options={citiesList}
                value={city}
                disabled={!currentState || citiesList.length === 0}
                onChange={(event, newValue) => {
                    setCity(newValue);
                    onChange?.({ country, state: currentState, city: newValue });
                }}
                getOptionLabel={(option) => option.name || ''}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => <TextField {...params} label="City" />}
            />
        </Stack>
    );
}
