import {FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CategoryCard} from './CategoryCard';
import Axios from '../../libraries/Axios';

export const Categories = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    Axios.get('categories').then(response => setCategories(response.data));
  }, []);

  return (
    <FlatList
      data={categories}
      renderItem={({item}) => {
        return <CategoryCard category={item} />;
      }}
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 15, paddingTop: 10},
});
