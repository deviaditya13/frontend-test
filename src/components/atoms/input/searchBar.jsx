import PropTypes from 'prop-types';
import { IonSearchbar } from '@ionic/react';
import { useState } from 'react';

const SearchBar = ({
    onSearch = () => {},
}) => {
    const [searchQuery, setSearchQuery] = useState('');

    function handleInputChange(e) {
        setSearchQuery(e.detail.value);
    }

    function handleSearch() {
        onSearch(searchQuery);
    }

    return (
        <IonSearchbar
        value={searchQuery}
        onIonInput={handleInputChange}
        onIonClear={() => handleSearch()} 
        onIonChange={handleSearch}       
        debounce={300}
        placeholder="Search Tasks"
        style={{
            '--background': '#ebf2f4',
            '--border-radius': '0.5rem',
            '--padding-start': '1rem',
            '--padding-end': '1rem',
            '--color': '#000',
            '--placeholder-color': '#888',
            height: '2.5rem', 
        }}
    />
  );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func,
};

export default SearchBar;
