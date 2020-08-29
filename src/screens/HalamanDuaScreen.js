import React, { Component } from "react";
import { View, Image, StatusBar, Text, TouchableOpacity } from 'react-native';
import { Button, Icon, Left, Right } from 'native-base';
import styles from "./styles/HalamanDuaStyle";
import { WebView } from 'react-native-webview';

export default class HalamanDuaScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // email: "",
            // id: this.props.navigation.getParam("idnya",""),
            url: this.props.navigation.getParam("urlWebView", {})
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent={false} barStyle="dark-content" />
                <View style={styles.header}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.iconBack} source={require("../../src/assets/icon/arrowBack.png")} />
                        {/* <Button transparent>
                        <Icon name='arrow-back' />
                    </Button> */}
                        {/* <Text>Back</Text> */}
                    </TouchableOpacity>
                </View>
                <WebView source={{ uri: this.state.url }} />
                {/* <View>
                    <View style={styles.containerInfo}>
                        <Text>Nama:</Text>
                        <Text> {this.state.data.name}</Text>
                    </View >
                    <View style={styles.containerInfo}>
                        <Text>Nomor Telp:</Text>
                        <Text> {this.state.data.phone}</Text>
                    </View>
                    <View style={styles.containerInfo}>
                        <Text>Nomor Telp:</Text>
                        <Text> {this.state.data.email}</Text>
                    </View>
                </View> */}
            </View>
        );
    }
}
