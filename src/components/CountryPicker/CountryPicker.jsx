import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl, StylesProvider } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = () => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            // const ddd = await countries;
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[setFetchedCountries]);

    // console.log(fetchedCountries)

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;