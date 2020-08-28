import React, { Component } from "react";
import { View, Image,Text,StatusBar } from 'react-native';
import styles from "./styles/HalamanSatuStyle";

export default class HalamanSatuScreen extends Component {
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
                    <Text>Halaman Satu</Text>
                </View>
            </View>
        );
    }
}
