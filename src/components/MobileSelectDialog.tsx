import React, { useEffect, useMemo, useState } from 'react';
import { Country, RestCountry } from '../types';
import Dialog from './Dialog';

import Textfield from './Textfield';

import { COLORS } from '../constants';
import countryList from '../data/country-list.json';

type Props = {
  open: boolean;
  onClose: () => void;
  country: Country | null;
  onSelect: (country: Country) => void;
};

export function MobileSelectDialog(props: Props) {
  const { open, onClose, country = null, onSelect } = props;

  const [countries, setCountries] = useState<Country[]>([]);

  const [search, setSearch] = useState('');

  const filteredCountries = useMemo(() => {
    if (!search) {
      return countries;
    }

    return countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [countries, search]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name.common,cca2,flags')
      .then((response) => response.json())
      .then((restCountries) => {
        const mappedCountries: Country[] = [];

        (restCountries as unknown as RestCountry[]).forEach(
          (country: RestCountry) => {
            const foundCountry = countryList.find(
              (c) => c.code === country.cca2
            );

            if (foundCountry) {
              mappedCountries.push({
                ...country,
                name: foundCountry.name,
                dial_code: foundCountry.dial_code,
              });
            }
          }
        );

        const sortedCountries = mappedCountries.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        setCountries(sortedCountries);
      });
  }, []);

  return (
    <Dialog open={open} onBackdrop={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: 'white',
          padding: 16,
          overflowY: 'clip',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: 32,
          }}
        >
          <button onClick={onClose}>CLOSE</button>
        </div>

        <Textfield
          id="search-country"
          type="text"
          placeholder="Search country"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            marginBottom: 40,
          }}
        />

        <div
          style={{
            overflowY: 'scroll',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          {filteredCountries.map((item, index) => (
            <div
              key={item.cca2}
              onClick={() => {
                onSelect(item);
                onClose();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBlock: 8,
                marginBlock: 8,
                paddingRight: 8,
                cursor: 'pointer',
                ...(filteredCountries.length - 1 === index
                  ? {
                      marginBottom: 56,
                    }
                  : {
                      borderTopWidth: '0.5px',
                      borderTopColor: COLORS.neutral.dark.grey,
                    }),
                ...(item.cca2 === country?.cca2 && {
                  backgroundColor: COLORS.brand.light.blue,
                }),
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '9999px',
                    padding: 4,
                    height: 24,
                    width: 24,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={item.flags.svg}
                    alt={item.flags.alt}
                    height={24}
                    width={24}
                  />
                </div>

                <p
                  style={{
                    marginLeft: 8,
                    color: COLORS.neutral.black,
                  }}
                >
                  {item.name}
                </p>
              </div>

              <p
                style={{
                  color: COLORS.neutral.dark.grey,
                }}
              >
                {item.dial_code}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Dialog>
  );
}
