import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    heading: {
        color: 'white',
        backgroundColor: '#eb6c49',
        borderRadius: 15,
        padding: 15,
        fontWeight: '600',
        fontSize: 16,
        alignSelf: 'center',
        textAlign: 'center',
        width: '75%',
        margin: 10,
    },
    container: {
        flex: 1,
        padding: 15,
    },
    newsItem: {
        marginTop: 20,
        marginBottom: 30,
        backgroundColor: '#eb6c49',
        borderRadius: 20,
        paddingBottom: 12,
        paddingTop: 12,
    },
    newsImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        alignSelf: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'white',
        padding: 10,

    },
    newsDescription: {
        fontSize: 14,
        color: 'black',
        backgroundColor: 'white',
        padding: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    newsDetails: {
        fontSize: 14,
        color: 'black',
        backgroundColor: 'white',
        padding: 5
    }
});
