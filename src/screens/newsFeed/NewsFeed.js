import { Text,StyleSheet,Image,FlatList,View,RefreshControl} from 'react-native';
import GetNews from '../../Services/GetNews';
import { useEffect, useState } from 'react';

export default function NewsFeed(){
    const [newsResponse,setNewsResponse]=useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(()=>{
        const getNewsData=async()=>{
            const response=await GetNews();
            setNewsResponse(response.articles)
        }
        getNewsData();
    },[]);

    const onRefresh = async() => {
      setRefreshing(true);
      const response=await GetNews();
      setNewsResponse(response.articles)
      setRefreshing(false);
    };

    const onEndReached=()=>{
      onRefresh();
      //in real fetch more data from server
    }
  

    return(
        <View style={styles.container}>
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
              source={{ uri: item.urlToImage }}
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
    newsDetails:{
      fontSize: 14,
      color:'black',
      backgroundColor:'white',
      padding:5
    }
  });

