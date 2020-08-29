import React, { Component } from "react";
import { View, Image, StatusBar } from 'react-native';
import styles from "./styles/HalamanDuaStyle";

export default class HalamanDuaScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent={false} barStyle="dark-content" />
                <View>
                    {/* mulai dari sini */}
                </View>
                
            </View>
        );
    }
}
