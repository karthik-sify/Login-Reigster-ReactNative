import { Text, StyleSheet, Image, FlatList, View, RefreshControl } from 'react-native';
import GetNews from '../../Services/GetNews';
import { useEffect, useState } from 'react';
import styles from './styles';

export default function NewsFeed() {
  const [newsResponse, setNewsResponse] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const getNewsData = async () => {
      const response = await GetNews();
      setNewsResponse(response.articles)
    }
    getNewsData();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    const response = await GetNews();
    setNewsResponse(response.articles)
    setRefreshing(false);
  };

  const onEndReached = () => {
    onRefresh();
    //in real fetch more data from server
  }


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>NEWS</Text>
      <FlatList
        data={newsResponse}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        // ItemSeparatorComponent={()=><View style={{height: 1,backgroundColor: 'gray',}}></View>}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1} // when 10% scrolled out of 100; onEndReached is triggered. 
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Image
              source={item.urlToImage?{uri:item.urlToImage}:{uri:"https://www.masflair.com/wp-content/themes/consultix/images/no-image-found-360x250.png" }}
              style={styles.newsImage}
            />
            <Text style={styles.newsTitle}> {item.title}</Text>
            {/* <Text style={styles.newsDetails}>AUTHOR: {item.author}</Text>
            <Text style={styles.newsDetails}>URL :{item.url}</Text>
            <Text style={styles.newsDescription}>PUBLISHED AT: {item.publishedAt}</Text> */}
            <Text style={styles.newsDescription}>{item.description}</Text>

          </View>
        )}
      />
    </View>
  );
};

