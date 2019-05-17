import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, Image, TouchableHighlight } from 'react-native'
import {
    View,
    Button,
    Icon
} from 'native-base';
import {
    responsiveHeight,
    responsiveWidth
} from "react-native-responsive-dimensions";

import allOrders from '../../main/Images/allOrders.png';
import success from '../../main/Images/success.png';
import failed from '../../main/Images/failed.png';
import newOrder from '../../main/Images/new.png';
import proccessing from '../../main/Images/proccessing.png';
import Drawer from '../common/common/Drawer';


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffcf11',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
    },
    card: {
        backgroundColor: 'white',
        padding: 10,
        width: '35%',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 15,
        height: responsiveHeight(15),
        justifyContent: 'center',
        alignContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    image: {
        width: '80%',
        height: 150,
        position: 'relative',
        left: '10%',
        borderWidth: 2,
        borderColor: 'white',
        marginBottom: 15,
        marginTop: 15,
    },
    iconImage: {
        height: '60%',
        marginTop: 5,
        width: '100%'

    }
})

class Home extends Component {
    state = {
        routes: [
            {
                displayText: 'Add Client',
                iconName: 'md-person',
                iconType: 'Ionicons',
                route: 'NewClient'
            },
            {
                displayText: 'All Orders',
                iconName: null,
                imageName: allOrders,
                route: 'AllOrders'
            },
            {
                displayText: 'Success',
                imageName: success,
                route: 'AllOrders'
            },
            {
                displayText: 'Processing',
                imageName: proccessing,
                route: 'AllOrders'
            },
            {
                displayText: 'Failed',
                imageName: failed,
                route: 'AllOrders'
            },
            {
                displayText: 'New',
                imageName: newOrder,
                route: 'SearchResult'
            },

        ]
    }


    render() {

        let routes = this.state.routes.map((item, index) => {
            return (
                <View key={index} style={styles.card}>
                    <TouchableHighlight onPress={() => this.props.history.push(`/${item.route}`)}>
                        <View>
                            <Text style={{
                                textAlign: 'center'
                            }}>{item.displayText}</Text>
                            {item.iconName ?
                                <Icon style={{
                                    textAlign: 'center',
                                    fontSize: 50
                                }} type={item.iconType} name={item.iconName} />
                                :
                                <Image source={item.imageName} style={styles.iconImage} resizeMode='contain' />
                            }
                        </View>
                    </TouchableHighlight>
                </View>
            )
        })
        return (
            <Drawer ref={(ref) => this.drawer = ref}>
                <Text onPress={() => this.drawer.openDrawer()}>hello</Text>
                <View style={styles.container}>
                    <ScrollView >
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            height: '100%'
                        }}>
                            <Image
                                style={styles.image}
                                source={require('../../../../../assets/Logo.png')}
                                resizeMode="contain" />
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                width: '80%',
                                position:'relative',
                                left: responsiveWidth(10),
                                top: 30,
                                height: responsiveHeight(60)
                            }}>
                                {routes}

                            </View>
                        </View>
                    </ScrollView>
                </View>

            </Drawer>
        );
    }
}

export default Home;