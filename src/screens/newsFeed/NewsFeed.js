import { Text,StyleSheet,Image,FlatList,View } from 'react-native';
import GetNews from '../../Services/GetNews';
import { useEffect, useState } from 'react';
import Button from '../../Components/Button';

export default function NewsFeed(){
    const [newsResponse,setNewsResponse]=useState([]);

    useEffect(()=>{
        const getNewsData=async()=>{
            const response=await GetNews();
            setNewsResponse(response.articles)
        }
        getNewsData();
    },[]);

    return(
        <View style={styles.container}>
      <FlatList
        data={newsResponse}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Image
              source={{ uri: item.urlToImage }}
              style={styles.newsImage}
            />
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
    },
    newsItem: {
      marginBottom: 50,
      backgroundColor:'#eb6c49',
      borderRadius:20,
      paddingBottom:12,
      paddingTop:12,
    },
    newsImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      alignSelf:'center',
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
    },
    newsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color:'black',
      backgroundColor:'white',
      padding:10,
     
    },
    newsDescription: {
      fontSize: 14,
      color:'black',
      backgroundColor:'white',
      padding:10,
      borderBottomRightRadius:10,
      borderBottomLeftRadius:10
    },
  });

