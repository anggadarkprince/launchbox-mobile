import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {CategoryCard} from './CategoryCard';

export const Categories = () => (
  <ScrollView
    contentContainerStyle={styles.container}
    horizontal
    showsHorizontalScrollIndicator={false}>
    <CategoryCard imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574" title="Testing" />
    <CategoryCard imgUrl="https://media.suara.com/pictures/653x366/2021/08/02/81387-ilustrasi-makanan-cepat-saji-freepik.jpg" title="Testing" />
    <CategoryCard imgUrl="https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie.jpg" title="Testing" />
    <CategoryCard imgUrl="https://domf5oio6qrcr.cloudfront.net/medialibrary/5850/e58e6784-ed7e-4aad-aa4f-822b8ae4bee4.jpg" title="Testing" />
    <CategoryCard imgUrl="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1551987240%2FGettyImages-946934442.jpg%3Fitok%3DbY0zmAn-" title="Testing" />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {paddingHorizontal: 15, paddingTop: 10}
});
