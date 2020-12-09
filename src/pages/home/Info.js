import React, { useContext, useEffect } from 'react'
import { View, Button, Text, ScrollView } from 'react-native'
import { Card, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { useRoute } from '@react-navigation/native';
export default Info = ({ navigation }) => {
    return (
        <ScrollView
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={{ paddingTop: 20,paddingBottom:20 }}>
                <WingBlank size="sm">
                    <Card>
                        <Card.Header
                            title="This is title"
                            thumbStyle={{ width: 30, height: 30 }}
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            extra="this is extra"
                        />
                        <Card.Body>
                            <View style={{ height: 42 }}>
                                <Text style={{ marginLeft: 16 }}>Card Content</Text>
                            </View>
                        </Card.Body>
                        <Card.Footer
                            content="footer content"
                            extra="footer extra content"
                        />
                    </Card>
                </WingBlank>
                <WhiteSpace size="lg" />
                <WingBlank size="sm">
                    <Card>
                        <Card.Header
                            title="This is title"
                            thumbStyle={{ width: 30, height: 30 }}
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            extra="this is extra"
                        />
                        <Card.Body>
                            <View style={{ height: 42 }}>
                                <Text style={{ marginLeft: 16 }}>Card Content</Text>
                            </View>
                        </Card.Body>
                        <Card.Footer
                            content="footer content"
                            extra="footer extra content"
                        />
                    </Card>
                </WingBlank>
                <WhiteSpace size="lg" />
                <WingBlank size="sm">
                    <Card>
                        <Card.Header
                            title="This is title"
                            thumbStyle={{ width: 30, height: 30 }}
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            extra="this is extra"
                        />
                        <Card.Body>
                            <View style={{ height: 42 }}>
                                <Text style={{ marginLeft: 16 }}>Card Content</Text>
                            </View>
                        </Card.Body>
                        <Card.Footer
                            content="footer content"
                            extra="footer extra content"
                        />
                    </Card>
                </WingBlank>
                <WhiteSpace size="lg" />
                <WingBlank size="sm">
                    <Card>
                        <Card.Header
                            title="This is title"
                            thumbStyle={{ width: 30, height: 30 }}
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            extra="this is extra"
                        />
                        <Card.Body>
                            <View style={{ height: 42 }}>
                                <Text style={{ marginLeft: 16 }}>Card Content</Text>
                            </View>
                        </Card.Body>
                        <Card.Footer
                            content="footer content"
                            extra="footer extra content"
                        />
                    </Card>
                </WingBlank>
                <WhiteSpace size="lg" />
                <WingBlank size="sm">
                    <Card>
                        <Card.Header
                            title="This is title"
                            thumbStyle={{ width: 30, height: 30 }}
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            extra="this is extra"
                        />
                        <Card.Body>
                            <View style={{ height: 42 }}>
                                <Text style={{ marginLeft: 16 }}>Card Content</Text>
                            </View>
                        </Card.Body>
                        <Card.Footer
                            content="footer content"
                            extra="footer extra content"
                        />
                    </Card>
                </WingBlank>
            </View>
        </ScrollView>
    )
}