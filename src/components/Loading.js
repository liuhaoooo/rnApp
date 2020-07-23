import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')
let _this = null
class Loading extends Component {
    constructor(props) {
        super(props)
        _this = this
        this.state = {
            showLoading: false
        }
    }
    static load(bool = false) {
        _this.setState({ showLoading: bool })
    }
    render() {
        return (
            _this.state.showLoading ? (
                <View style={styles.loadingPage}>
                    <View style={styles.loadingContent}>
                        <ActivityIndicator size="large" color="#FFF" />
                    </View>
                </View>) : null
        )
    }
}
export default Loading

const styles = StyleSheet.create({
    loadingPage: {
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: "rgba(0,0,0,0)",
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
    },
    loadingContent: {
        width: 100,
        height: 100,
        backgroundColor: "rgba(0,0,0,0.6)",
        opacity: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7
    }
});