import React, { useContext,useEffect, useState } from 'react'
import { View, TextInput, Text,TouchableOpacity } from 'react-native'
import { Form } from 'react-native-validator'
import { useRoute } from '@react-navigation/native';
export default Status = ({ navigation }) => {
    const [dynamicValidateForm,setdynamicValidateForm]= useState(
        {
            name:'',
            name2:"",
            phone:"",
            picker:"",
            nickname:""
        }
    )
    return (
        <View style={{marginHorizontal:10}}>
                {/* <Form.elForm 
                   model={dynamicValidateForm}
                   ref="dynamicValidateForm">
                    <Form.elFormItem 
                    label="name:"
                     prop="name"
                     rules={[
                        { required: true, message: 'name' }
                      ]}
                    >
                         <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            value={dynamicValidateForm.name}
                            placeholder="name"
                            onChangeText={text => this.changeText('name',text)}
                          />
                    </Form.elFormItem>

                    <Form.elFormItem 
                    label="phonne:"
                     prop="phone"
                     rules={[
                        { required: true, message: 'Please enter  numerals' },
                        { pattern: /^\d{6}$/, message: 'Please enter 6 Arabic numerals' }
                      ]}
                     >
                         <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            value={dynamicValidateForm.phone}
                            placeholder="phone"
                            onChangeText={text => this.changeText('phone',text)}
                          />
                    </Form.elFormItem>
                    <Form.elFormItem 
                     label="nickname:"
                     prop="nickname"
                     checkOnBlur={true}
                     rules={[
                        { required: true, message: 'nicknname' },
                      ]}
                     >
                          <Form.elInput
                            value={dynamicValidateForm.nickname}
                            placeholder="check after blur"
                            onChangeText={text => this.changeText('nickname',text)}
                          />
                    </Form.elFormItem>
                    <Form.elFormItem 
                    label="picker:"
                     prop="picker"
                     rules={[
                        { required: true, message: 'picker' }
                      ]}
                    >
                         <Picker
                          selectedValue={this.state.dynamicValidateForm.picker}
                          style={{height: 200, width: 100,borderColor: 'gray', borderWidth: 1 }}
                          onValueChange={(itemValue, itemIndex) =>
                            this.changeText('picker',itemValue)
                          }>
                          <Picker.Item label="picker" value="" />
                          <Picker.Item label="Java" value="java" />
                          <Picker.Item label="JavaScript" value="js" />
                          <Picker.Item label="css" value="css" />
                        </Picker>
                    </Form.elFormItem>
                    <View>
                        <TouchableOpacity onPress={((()=>this.submit()))}>
                            <View style={styles.normalBtn}>
                                    <Text style={styles.normalBtnTxt}>submit</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Form.elForm> */}
          </View>
    )
}

