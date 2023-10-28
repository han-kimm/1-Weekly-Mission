import { useState } from 'react';
import searchImg from '../../assets/Search.svg'
import { useSearchParams } from 'react-router-dom';
import S from '../styled';

function SearchBar() {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ folderId: value, });
  }
  return (
    <S.DivSearch>
      <form onSubmit={handleSubmit}>
        <S.InputSearch name="folderId" placeholder='링크를 검색해보세요.' value={value} onChange={handleChange} />
      </form>
      <S.ImgSearch src={searchImg} alt='검색창 표시 이미지'></S.ImgSearch>
    </S.DivSearch>
  )
}

export default SearchBar