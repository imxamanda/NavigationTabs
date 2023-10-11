import React, { useEffect, useState } from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { FlatList, ScrollView, Text, View, StyleSheet } from 'react-native';
import Api from '../../sevices/Api';


const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Api.get('posts')
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ScrollView>
        {posts.map((item) => (
          <Card style={styles.card} key={item.id}>
            <Card.Content>
              <Text variant="titleLarge">{item.title}</Text>
              <Text variant="bodyMedium">{item.body}</Text>
              <View style={styles.tags}>
                {item.tags.map((tag) => (
                  <Text key={tag} style={styles.tagItem}>
                    {tag}
                  </Text>
                ))}
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </>
  );
};

export default Posts;

const styles = StyleSheet.create({
  card: {
    marginBottom: 25,
  },
  tags: {
    display: 'flex',
    flexDirection: 'row', 
    marginTop: 10,
  },
  tagItem: {
    marginRight: 10,
    backgroundColor: '#e6d1e9'
  },
});