import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
    body: {
        fontFamily: 'Roboto-Regular',
    },
    listContainer: {
        flex: 1,
    },
    listItem: {
        padding: 10,
        borderWidth: 0.5,
        borderColor: "#DADADA",
        color: "#20232a",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cityName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    tempText: {
        fontSize: 30
    },
    container: {
        height: '80%',
        width: '100%',
      },
      map: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      infoContainer: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
      },
      infoText: {
        fontSize: 20,
        marginBottom: 5,
      },
      cityName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      tempContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
      },
      cloudImg: {
        height: 100,
        width: 120,
      },
      tempText: {
        fontSize: 40,
        fontWeight: '500',
      },
      mapPin: {
        width: 40,
        height: 70,
        alignSelf: 'center'
      },
      pinText: {
        fontSize: 20,
        fontWeight: '500'
      }
});