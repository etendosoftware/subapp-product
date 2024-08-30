import React, { useEffect, useState } from 'react';
import { SearchContainer } from 'etendo-ui-library';

interface SearchProps {
  onSubmit: (value?: string) => void;
  value?: string;
  labels: {
    searchPlaceholder: string;
  };
}

const Search = ({ onSubmit, value, labels }: SearchProps) => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    setText(value ?? '');
  }, [value]);

  return (
    <SearchContainer
      placeholder={labels.searchPlaceholder}
      onSubmit={onSubmit}
      value={text}
      onChangeText={setText}
    />
  );
};

export default Search;
