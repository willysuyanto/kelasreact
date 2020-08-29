import React, { Component } from "react";
import { View, Image, Text, StatusBar, ScrollView } from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import _ from '../component/function';
import styles from "./styles/HalamanSatuStyle";

export default class HalamanSatuScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            daftarNama: [],
            bool:true,
            variable:null,
        };
    }

    componentDidMount() {
        this._getDataApi()
    }

    _getDataApi() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                this.setState({ daftarNama: json })
            })
    }

    _generateList() {
        var daftarnya = [];
        if (this.state.daftarNama.length != 0) {
            this.state.daftarNama.map((data) => {
                daftarnya.push(
                    <Card>
                        <CardItem>
                            <Text>{data.name}</Text>
                        </CardItem>
                        <CardItem>
                            <Button primary onPress={()=>{this.props.navigation.navigate()}}><Text>Test</Text></Button>
                        </CardItem>
                        <CardItem>
                            <Text>{_.FormatNumber(100000)}</Text>
                        </CardItem>
                    </Card>
                )
            })
        }
        return daftarnya;
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent={false} barStyle="dark-content" />
                <ScrollView>
                    {/* mulai dari sini */}
                    <Text>Halaman Satu</Text>
                    {this._generateList()}
                </ScrollView>
                <View></View>
            </View>
        );
    }
}
