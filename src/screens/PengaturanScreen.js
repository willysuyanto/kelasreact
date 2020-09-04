import React, { Component } from "react";
import { View, Image, Text, StatusBar, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import styles from "./styles/HalamanSatuStyle";
import _ from '../component/function';
import { Card, CardItem, Button, Picker, Item, Icon } from 'native-base';
import config from '../config'


export default class PengaturanScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            List: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            bool: true,
            CountryCode: "ID",
            ListBerita: [],
            selected: "Amerika",
            arrayCountryCode: [{ "code": "ID", "name": "Indonesia" }, { "code": "US", "name": "Amerika" }, { "code": "RU", "name": "Rusia" }],
            refreshing:false
        };
    }
    onValueChange(value) {
        this.setState({
            CountryCode: value,
            selected: value
        });
        this._getDataApi(value);
    }

    componentDidMount() {
        this._getDataApi(this.state.CountryCode);
    }

    _getDataApi(country) {
        fetch(config.news_url + country)
            .then(response => response.json())
            .then(json => {
                this.setState({ ListBerita: json.articles })
            })
    }

    _generateOption() {
        var listOption = []
        this.state.arrayCountryCode.map((data) => {
            listOption.push(
                <Picker.Item label={data.name} value={data.code} />
            )
        })
        return listOption;
    }
    _generateList() {
        var daftarnya = [];
        if (this.state.ListBerita.length != 0) {
            this.state.ListBerita.map((data) => {
                daftarnya.push(
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate("HalamanDua", { urlWebView: data.url })
                    }}>
                        <Card >
                            {this.state.bool ?
                                <CardItem>
                                    <Text style={styles.title}>{data.title}</Text>
                                </CardItem> : null
                            }
                            <CardItem>
                                <Image style={styles.stretch} source={{ uri: data.urlToImage }} />
                            </CardItem>
                            <CardItem>
                                <Text style={styles.source}>{data.source.name}</Text>
                            </CardItem>

                            {/* <CardItem>
                                <Text style={styles.text}>{data.name == null ? "-" : data.name}</Text>
                            </CardItem> */}
                            {/* <CardItem>
                                <Text>{data.address.zipcode}</Text>
                            </CardItem>
                            <CardItem>
                                <Text>{_.FormatNumber(1000000)}</Text>
                            </CardItem> */}
                            {/* <CardItem>
                                <Button primary style={styles.btn} onPress={() => {
                                    this.props.navigation.navigate("HalamanDua", { idnya: data.id, datanya: data });
                                }}>
                                    <Text>Ke Halaman 2</Text>
                                </Button>
                            </CardItem> */}
                        </Card>
                    </TouchableOpacity>
                );
            })
        }
        return daftarnya;
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent={false} barStyle="dark-content" />
                <View style={styles.header}>
                    <View style={styles.headerContainer}>
                        <Icon type='FontAwesome' name='bars' style={styles.icon} />
                        <Text style={styles.headerText}>PENGATURAN</Text>
                    </View>
                    <TouchableOpacity style={styles.headerHome} onPress={() => {
                        this.componentDidMount()
                    }}>
                        <Icon type='FontAwesome' name='home' style={styles.icon} />
                        {/* <Text style={styles.headerText}>MENU</Text> */}
                    </TouchableOpacity>
                    <Image />
                </View>
                <Text style={{alignSelf:'center',justifyContent:'center'}}>Ini Halaman Pengaturan</Text>
            </View>
        );
    }
}
