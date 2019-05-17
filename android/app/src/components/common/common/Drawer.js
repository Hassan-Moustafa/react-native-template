import React, { Component } from 'react';
import SideBar from './SideBar';
import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Drawer } from 'native-base';

export default class DrawerExample extends Component {

    constructor(props){
        super(props);
    }

    closeDrawer = () => {
        if(this.drawer)
        this.drawer._root.close()
    };
    openDrawer = () => {
        if(this.drawer)
        this.drawer._root.open()
    };

    render() {
        return (
            <Drawer
                ref={(ref) => this.drawer = ref }
                content={<SideBar setScreen={this.closeDrawer} />}
                onClose={() => this.closeDrawer()}
                styles={{
                    drawer: {
                        shadowColor: 'white',
                        backgroundColor: 'black',
                        shadowOpacity: 0.8,
                        shadowRadius: 3,
                        opacity: 0.9

                    }
                }}>
                {this.props.children}
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: responsiveHeight(100),
        width: responsiveWidth(50),
    }
})